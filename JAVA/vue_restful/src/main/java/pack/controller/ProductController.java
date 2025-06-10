package pack.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import pack.dto.ProductDto;
import pack.repository.ProductProcess;

@RestController
@RequestMapping("/products") // 기본 경로: /products
@CrossOrigin(origins = "*")
public class ProductController {

    @Autowired
    private ProductProcess productProcess;

    /**
     * 전체 상품 조회 API
     * GET /products
     *
     * @return 상품 목록 (JSON 배열)
     */
    // 전체 상품 조회
    @GetMapping
    public ResponseEntity<List<ProductDto>> getAll() {
        List<ProductDto> products = productProcess.getAll();
        return ResponseEntity.ok(products); // 200 OK + 데이터 반환
    }

    /**
     * 개별 상품 조회 API
     * GET /products/{code}
     *
     * @param code 상품 코드
     * @return 해당 상품의 상세 정보 (JSON)
     */
    // 특정 상품 조회
    @GetMapping("/{code}")
    public ResponseEntity<ProductDto> getProduct(@PathVariable String code) {
        ProductDto dto = productProcess.getData(code);
        if (dto != null) {
            return ResponseEntity.ok(dto); // 200 OK
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null); // 404 반환
        }
    }

    /**
     * 상품 등록 API
     * POST /products
     *
     * @param dto 등록할 상품 정보 (JSON)
     * @return 성공 메시지
     */
    // 상품 등록
    @PostMapping
    public ResponseEntity<String> insert(@RequestBody ProductDto dto) {
        productProcess.insert(dto);
        return ResponseEntity.status(HttpStatus.CREATED).body("insert success"); // 201 Created
    }

    /**
     * 상품 수정 API
     * PUT /products
     *
     * @param dto 수정할 상품 정보 (JSON)
     * @return 성공 메시지
     */
    // 상품 수정
    @PutMapping("/{code}")
    public ResponseEntity<String> update(@PathVariable("code") String code, @RequestBody ProductDto dto) {
        ProductDto existing = productProcess.getData(code);
        if (existing == null) {
            return ResponseEntity.notFound().build();
        }
        dto.setCode(code);
        productProcess.update(dto);
        return ResponseEntity.ok("update success"); // 200 OK
    }

    /**
     * 상품 삭제 API
     * DELETE /products/{code}
     *
     * @param code 삭제할 상품 코드
     * @return 성공 메시지
     */
    // 상품 삭제
    @DeleteMapping("/{code}")
    public ResponseEntity<String> delete(@PathVariable String code) {
        productProcess.delete(code);
        return ResponseEntity.ok("delete success");
    }
}
