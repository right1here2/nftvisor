const NFTapestry = require('nftapestry');
const lodash = require('lodash');
const moment = require('moment');

class NFTVisor extends NFTapestry {
    constructor(providerUrl) {
        super(providerUrl);
    }

    async analyzeTrends(collectionSlug) {
        const nfts = await this.fetchNFTs(collectionSlug, 50);
        const sales = nfts.map(nft => ({
            price: parseFloat(nft.last_sale.total_price) / Math.pow(10, 18),
            date: moment.unix(nft.last_sale.event_timestamp).format('YYYY-MM-DD')
        }));

        const trend = lodash.groupBy(sales, 'date');
        console.log('Sales trend:', trend);
    }
}

module.exports = NFTVisor;