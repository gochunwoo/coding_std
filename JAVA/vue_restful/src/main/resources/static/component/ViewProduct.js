export default {
  data() {
    return {
      products: [],
      error: null,
      showForm: false,
      isEdit: false,
      editCode: "",
      newProduct: {
        code: "",
        name: "",
        description: "",
        price: "",
        image: "",
      },
      modal: null,
    };
  },
  mounted() {
    this.fetchProducts();
    // 모달 초기화
    this.modal = new bootstrap.Modal(document.getElementById("productModal"));
  },
  methods: {
    async fetchProducts() {
      try {
        const response = await axios.get("http://localhost/products");
        this.products = response.data;
      } catch (err) {
        this.error = "서버에서 데이터를 불러오지 못했습니다.";
      }
    },
    async insertProduct() {
      try {
        await axios.post("http://localhost/products", this.newProduct);
        this.fetchProducts();
        this.resetForm();
        this.modal.hide();
      } catch (err) {
        alert("등록 실패!");
      }
    },
    async updateProduct() {
      try {
        await axios.put(
          `http://localhost/products/${this.editCode}`,
          this.newProduct
        );
        this.fetchProducts();
        this.resetForm();
        this.modal.hide();
      } catch (err) {
        alert("수정 실패!");
      }
    },
    deleteProduct(code) {
      if (confirm(`정말 삭제할까요?`)) {
        axios
          .delete(`http://localhost/products/${code}`)
          .then(() => this.fetchProducts());
      }
    },
    editProduct(code) {
      const target = this.products.find((p) => p.code === code);
      if (target) {
        this.newProduct = { ...target };
        this.editCode = code;
        this.isEdit = true;
        this.showForm = true;
        this.modal.show();
      }
    },
    resetForm() {
      this.newProduct = {
        code: "",
        name: "",
        description: "",
        price: "",
        image: "",
      };
      this.editCode = "";
      this.isEdit = false;
      this.showForm = false;
    },
    openAddModal() {
      this.resetForm();
      this.showForm = true;
      this.modal.show();
    },
  },
  template: `
    <div class="container py-5">
      <div v-if="error" class="alert alert-danger" role="alert">{{ error }}</div>

      <div class="d-flex justify-content-between align-items-center mb-4">
        <h2 class="mb-0">제품 목록</h2>
        <button @click="openAddModal" class="btn btn-primary">
          <i class="bi bi-plus-lg"></i> 제품 추가
        </button>
      </div>

      <!-- 제품 목록 -->
      <div class="row g-4">
        <div v-for="p in products" :key="p.code" class="col-md-4">
          <div class="card h-100">
            <div class="position-relative">
              <img :src="p.image || 'https://source.unsplash.com/300x300/?product'" 
                   class="card-img-top" style="height: 200px; object-fit: cover;" 
                   :alt="p.name">
              <div class="position-absolute top-0 end-0 p-2">
                <button @click="editProduct(p.code)" class="btn btn-sm btn-warning me-2">
                  <i class="bi bi-pencil"></i>
                </button>
                <button @click="deleteProduct(p.code)" class="btn btn-sm btn-danger">
                  <i class="bi bi-trash"></i>
                </button>
              </div>
            </div>
            <div class="card-body">
              <h5 class="card-title">{{ p.name }}</h5>
              <p class="card-text text-muted">{{ p.description }}</p>
              <div class="d-flex justify-content-between align-items-center">
                <span class="h5 mb-0 text-primary">{{ p.price }}원</span>
                <button class="btn btn-outline-primary">
                  <i class="bi bi-cart-plus"></i> 장바구니
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 제품 등록/수정 모달 -->
      <div class="modal fade" id="productModal" tabindex="-1" aria-labelledby="productModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="productModalLabel">{{ isEdit ? '✏️ 제품 수정' : '➕ 새 제품 등록' }}</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <form @submit.prevent="isEdit ? updateProduct() : insertProduct()">
                <div class="row g-3">
                  <div class="col-md-6">
                    <label class="form-label">제품 코드</label>
                    <input v-model="newProduct.code" :disabled="isEdit" 
                           class="form-control" placeholder="제품 코드" required>
                  </div>
                  <div class="col-md-6">
                    <label class="form-label">제품명</label>
                    <input v-model="newProduct.name" class="form-control" placeholder="제품명" required>
                  </div>
                  <div class="col-12">
                    <label class="form-label">제품 설명</label>
                    <textarea v-model="newProduct.description" class="form-control" 
                              rows="3" placeholder="제품 설명" required></textarea>
                  </div>
                  <div class="col-md-6">
                    <label class="form-label">가격</label>
                    <div class="input-group">
                      <input v-model="newProduct.price" type="number" class="form-control" 
                             placeholder="가격" required>
                      <span class="input-group-text">원</span>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <label class="form-label">이미지 URL</label>
                    <input v-model="newProduct.image" class="form-control" 
                           placeholder="이미지 URL">
                  </div>
                </div>
                <div class="text-end mt-4">
                  <button type="button" class="btn btn-secondary me-2" data-bs-dismiss="modal">취소</button>
                  <button type="submit" class="btn btn-primary">
                    {{ isEdit ? '수정 완료' : '등록' }}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
};
