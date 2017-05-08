package com.amazonaws.lambda.dynamodb.products;

import com.amazonaws.AmazonClientException;
import com.amazonaws.AmazonServiceException;
import com.amazonaws.lambda.dynamodb.bean.ProductRequestOld;
import com.amazonaws.regions.Region;
import com.amazonaws.regions.Regions;
import com.amazonaws.services.dynamodbv2.AmazonDynamoDBClient;
import com.amazonaws.services.dynamodbv2.document.DynamoDB;
import com.amazonaws.services.dynamodbv2.document.Item;
import com.amazonaws.services.dynamodbv2.document.PutItemOutcome;
import com.amazonaws.services.dynamodbv2.document.spec.PutItemSpec;
import com.amazonaws.services.dynamodbv2.model.ConditionalCheckFailedException;
import com.amazonaws.services.lambda.runtime.Context;
import com.amazonaws.services.lambda.runtime.RequestHandler;

public class SaveProductHandlerOld implements RequestHandler<ProductRequestOld, String> {

    private DynamoDB dynamoDb;

    private String DYNAMODB_TABLE_NAME = "product";
    private Regions REGION = Regions.US_EAST_1;

    public String handleRequest(ProductRequestOld productRequest, Context context) {
        
        try{
        	this.init();
        	persistData(productRequest);
        } 
        catch (AmazonServiceException ase) {
            System.out.println("Caught an AmazonServiceException, which means your request made it "
                    + "to AWS, but was rejected with an error response for some reason.");
            System.out.println("Error Message:    " + ase.getMessage());
            System.out.println("HTTP Status Code: " + ase.getStatusCode());
            System.out.println("AWS Error Code:   " + ase.getErrorCode());
            System.out.println("Error Type:       " + ase.getErrorType());
            System.out.println("Request ID:       " + ase.getRequestId());
        }
        catch (AmazonClientException ace) {
            System.out.println("Caught an AmazonClientException, which means the client encountered "
                    + "a serious internal problem while trying to communicate with AWS, "
                    + "such as not being able to access the network.");
            System.out.println("Error Message: " + ace.getMessage());
        }
         return "New Record Saved Successfully..";
    }

    private PutItemOutcome persistData(ProductRequestOld productRequest) throws ConditionalCheckFailedException {
        return this.dynamoDb.getTable(DYNAMODB_TABLE_NAME)
          .putItem(
            new PutItemSpec().withItem(new Item()
                .withString("sku", productRequest.getSku())
        		.withString("name", productRequest.getName())
        		.withString("longdescription",productRequest.getLongdescription())
        		.withString("shortdescription", productRequest.getShortdescription())
        		.withLong("price",productRequest.getPrice())));
           
    }

    private void init() {
        AmazonDynamoDBClient client = new AmazonDynamoDBClient();
        client.setRegion(Region.getRegion(REGION));
        this.dynamoDb = new DynamoDB(client);
    }
}