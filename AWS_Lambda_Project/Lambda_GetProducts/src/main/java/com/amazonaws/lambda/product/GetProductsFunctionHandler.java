package com.amazonaws.lambda.product;

import com.amazonaws.AmazonClientException;
import com.amazonaws.AmazonServiceException;
import com.amazonaws.regions.Region;
import com.amazonaws.regions.Regions;
import com.amazonaws.services.dynamodbv2.AmazonDynamoDBClient;
import com.amazonaws.services.dynamodbv2.model.ScanRequest;
import com.amazonaws.services.dynamodbv2.model.ScanResult;
import com.amazonaws.services.lambda.runtime.Context;
import com.amazonaws.services.lambda.runtime.RequestHandler;
import com.amazonaws.services.lambda.runtime.events.DynamodbEvent;

public class GetProductsFunctionHandler implements
		RequestHandler<DynamodbEvent, ScanResult> {

	private String DYNAMODB_TABLE_NAME = "ProductStore";

	public ScanResult handleRequest(DynamodbEvent event, Context context) {
		ScanResult scanResult = null;
		try {
			AmazonDynamoDBClient dynamoDB = new AmazonDynamoDBClient();
			Region usWest2 = Region.getRegion(Regions.US_EAST_1);
			dynamoDB.setRegion(usWest2);
			ScanRequest scanRequest = new ScanRequest(DYNAMODB_TABLE_NAME);
			scanResult = dynamoDB.scan(scanRequest);
			System.out.println("Result: " + scanResult);

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

		return scanResult;

	}
}