package com.amazonaws.lambda.product;

import java.util.HashMap;

import com.amazonaws.AmazonClientException;
import com.amazonaws.AmazonServiceException;
import com.amazonaws.regions.Region;
import com.amazonaws.regions.Regions;
import com.amazonaws.services.dynamodbv2.AmazonDynamoDBClient;
import com.amazonaws.services.dynamodbv2.model.AttributeValue;
import com.amazonaws.services.dynamodbv2.model.ComparisonOperator;
import com.amazonaws.services.dynamodbv2.model.Condition;
import com.amazonaws.services.dynamodbv2.model.ScanRequest;
import com.amazonaws.services.dynamodbv2.model.ScanResult;
import com.amazonaws.services.lambda.runtime.Context;
import com.amazonaws.services.lambda.runtime.RequestHandler;

public class SearchProductFunctionHandler implements RequestHandler<String,ScanResult> {

	private String DYNAMODB_TABLE_NAME = "ProductStore";

	public ScanResult handleRequest(String productId,Context context) {
   
		context.getLogger().log("Input: " + productId);
		ScanResult scanResult  = null ;
		
		try{
			AmazonDynamoDBClient dynamoDB = new AmazonDynamoDBClient();
	        Region usWest2 = Region.getRegion(Regions.US_EAST_1);
	        dynamoDB.setRegion(usWest2);
	        HashMap<String, Condition> scanFilter = new HashMap<String, Condition>();
	        Condition condition = new Condition()
	            .withComparisonOperator(ComparisonOperator.EQ.toString())
	            .withAttributeValueList(new AttributeValue().withS(productId));
	        scanFilter.put("productID", condition);
	        ScanRequest scanRequest = new ScanRequest(DYNAMODB_TABLE_NAME).withScanFilter(scanFilter);
	        scanResult = dynamoDB.scan(scanRequest);
	        System.out.println("Result: " + scanResult);
			
		}
		 catch (AmazonServiceException ase) {
	            System.out.println("Caught an AmazonServiceException, which means your request made it "
	                    + "to AWS, but was rejected with an error response for some reason.");
	            System.out.println("Error Message:    " + ase.getMessage());
	            System.out.println("HTTP Status Code: " + ase.getStatusCode());
	            System.out.println("AWS Error Code:   " + ase.getErrorCode());
	            System.out.println("Error Type:       " + ase.getErrorType());
	            System.out.println("Request ID:       " + ase.getRequestId());
	        } catch (AmazonClientException ace) {
	            System.out.println("Caught an AmazonClientException, which means the client encountered "
	                    + "a serious internal problem while trying to communicate with AWS, "
	                    + "such as not being able to access the network.");
	            System.out.println("Error Message: " + ace.getMessage());
	        }
		
        return scanResult;

	}	
}