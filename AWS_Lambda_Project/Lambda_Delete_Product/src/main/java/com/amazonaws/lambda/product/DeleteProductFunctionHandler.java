package com.amazonaws.lambda.product;

import com.amazonaws.AmazonClientException;
import com.amazonaws.AmazonServiceException;
import com.amazonaws.regions.Region;
import com.amazonaws.regions.Regions;
import com.amazonaws.services.dynamodbv2.AmazonDynamoDBClient;
import com.amazonaws.services.dynamodbv2.document.DeleteItemOutcome;
import com.amazonaws.services.dynamodbv2.document.DynamoDB;
import com.amazonaws.services.dynamodbv2.document.Table;
import com.amazonaws.services.lambda.runtime.Context;
import com.amazonaws.services.lambda.runtime.RequestHandler;

public class DeleteProductFunctionHandler implements RequestHandler<String, DeleteItemOutcome> {

	private String DYNAMODB_TABLE_NAME = "ProductStore";
	private DynamoDB dynamoDb;
	private Regions REGION = Regions.US_EAST_1;

	public DeleteItemOutcome handleRequest(String productId, Context context) {
		context.getLogger().log("Input: " + productId);
		DeleteItemOutcome outcome = null;
		try {
			AmazonDynamoDBClient client = new AmazonDynamoDBClient();
			client.setRegion(Region.getRegion(REGION));
			this.dynamoDb = new DynamoDB(client);
			
			Table table = dynamoDb.getTable(DYNAMODB_TABLE_NAME);
			outcome = table.deleteItem("productID", productId);
			System.out.println("Result ::"+outcome);

		} catch (AmazonServiceException ase) {
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

		return outcome;

	}

}