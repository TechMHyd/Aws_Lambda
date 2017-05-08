package com.amazonaws.lambda.dynamodb.bean;

public class ProductRequest  {

	private String productID;
    private String category;
	private Long price;
	private String model;
	private int quantity;
	private String productName;
	
	public String getProductName() {
		return productName;
	}
	public void setProductName(String productName) {
		this.productName = productName;
	}
	public String getProductID() {
		return productID;
	}
	public void setProductID(String productID) {
		this.productID = productID;
	}
	public String getCategory() {
		return category;
	}
	public void setCategory(String category) {
		this.category = category;
	}
	public Long getPrice() {
		return price;
	}
	public void setPrice(Long price) {
		this.price = price;
	}
	public String getModel() {
		return model;
	}
	public void setModel(String model) {
		this.model = model;
	}
	
	public int getQuantity() {
		return quantity;
	}
	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}
	
	
	public ProductRequest(String productID, String category, Long price,
			String model, String description, int quantity, String productName) {
		super();
		this.productID = productID;
		this.category = category;
		this.price = price;
		this.model = model;
		
		this.quantity = quantity;
		this.productName = productName;
	}
	
	@Override
	public String toString() {
		return "ProductRequest [productID=" + productID + ", category="
				+ category + ", price=" + price + ", model=" + model
				+ "quantity=" + quantity
				+ ", productName=" + productName + "]";
	}

	
	public ProductRequest() {
		super();
		// TODO Auto-generated constructor stub
	}


	

}
