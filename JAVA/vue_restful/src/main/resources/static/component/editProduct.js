export default {
    data() {
        return {
            product: {
                code: '',
                name: '',
                description: '',
                price: '',
                image: ''
            },
            error: null
        };
    },
    mounted() {
        const code = this.$route.params.code;
        this.fetchProduct(code);
    },
    methods: {
        async fetchProduct(code) {
            try {
                const response = await axios.get(`http://localhost/products/${code}`);
                this.product = response.data;
            } catch (err) {
                this.error = "상품 정보를 불러오지 못했습니다.";
            }
        },
        async updateProduct() {
            try {
                await axios.put(`http://localhost/products/${this.product.code}`, this.product);
                alert("수정 완료!");
                this.$router.push('/products');
            } catch (err) {
                alert("수정 실패!");
            }
        }
    },
    template: `
    <div style="padding: 40px;">
      <h2 style="text-align: center; color: #f0c674;">✏️ 제품 수정</h2>

      <div v-if="error" style="color: red; margin-bottom: 20px;">{{ error }}</div>

      <div style="background-color: #2a2a2a; padding: 20px; border-radius: 8px; max-width: 800px; margin: auto;">
        <div style="display: flex; flex-wrap: wrap; gap: 10px; justify-content: center;">
          <input v-model="product.code" disabled placeholder="제품 코드" style="padding: 8px; width: 48%; border-radius: 5px; border: none;" />
          <input v-model="product.name" placeholder="제품명" style="padding: 8px; width: 48%; border-radius: 5px; border: none;" />
          <input v-model="product.description" placeholder="제품 설명" style="padding: 8px; width: 48%; border-radius: 5px; border: none;" />
          <input v-model="product.price" placeholder="가격" style="padding: 8px; width: 48%; border-radius: 5px; border: none;" />
          <input v-model="product.image" placeholder="이미지 URL" style="padding: 8px; width: 48%; border-radius: 5px; border: none;" />
        </div>

        <div style="text-align: center; margin-top: 20px;">
          <button @click="updateProduct" style="padding: 10px 20px; background-color: #ffc107; color: black; border: none; border-radius: 5px;">수정 완료</button>
          <button @click="$router.push('/products')" style="padding: 10px 20px; margin-left: 10px; background-color: #6c757d; color: white; border: none; border-radius: 5px;">취소</button>
        </div>
      </div>
    </div>
  `
};
