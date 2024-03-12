# NFTVisor
NFTVisor is a powerful JavaScript library that extends NFTapestry to provide advanced NFT market analysis capabilities. By leveraging additional libraries like lodash for data manipulation and moment for date handling, NFTVisor offers a simple yet effective tool for analyzing sales trends within NFT collections.

Features
Sales Trend Analysis: Efficiently analyzes sales data from specified NFT collections to identify trends over time.
Integration with NFTapestry: Inherits NFTapestry's functionalities, providing a robust foundation for fetching NFT data.
Simple and Flexible API: Offers an easy-to-use interface for developers to integrate NFT sales trend analysis into their applications.
Installation
Before using NFTVisor, ensure you have installed its dependencies. Run the following command in your project directory:

npm install nftapestry lodash moment
After installing the dependencies, you can include NFTVisor in your project:

const NFTVisor = require('./path/to/NFTVisor');
Usage
Initializing NFTVisor
Create an instance of NFTVisor by providing the URL of your Ethereum provider:

const nftVisor = new NFTVisor('https://your-ethereum-provider.url');
Analyzing Sales Trends
To analyze the sales trends of a specific NFT collection, use the analyzeTrends method. This method fetches recent sales data and groups them by sale date:

(async () => {
    const collectionSlug = 'example-collection-slug';
    await nftVisor.analyzeTrends(collectionSlug);
})();
Example
Here's a quick example showing how to use NFTVisor to analyze sales trends for a given NFT collection:

const NFTVisor = require('./path/to/NFTVisor');

(async () => {
    const nftVisor = new NFTVisor('https://your-ethereum-provider.url');
    const collectionSlug = 'cool-cats-nft';
    await nftVisor.analyzeTrends(collectionSlug);
})();
This example fetches the last 50 sales from the "cool-cats-nft" collection, calculates each sale's price in Ether, and groups sales by their transaction dates.
