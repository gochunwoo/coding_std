package pack.product;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ProductDto {
	private String product_no, productname, productbrand, topnote, middlenote, basenote,
	majorcustomer, releasedate, productprice, otherdescription, imagelink;
}
