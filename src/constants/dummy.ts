export const portfolio = {
    balance: "12,724.33",
    changes: "+2.36%",
};

export const trendingCurrencies = [
    {
        id: 1,
        currency: "Bitcoin",
        code: "BTC",
        image: require("../assets/images/bitcoin.png"),
        amount: "29,455.74",
        changes: "+1.73%",
        type: "I",          // I - Increased, D - Decreased
        description: "Bitcoin (BTC) is a cryptocurrency, a virtual currency designed to act as money and a form of payment outside the control of any one person, group, or entity, thus removing the need for third-party involvement in financial transactions. It is rewarded to blockchain miners for the work done to verify transactions and can be purchased on several exchanges.",
        chartData: [
            { x: 1, y: 2.5},
            { x: 1.5, y: 2},
            { x: 2, y: 2.3},
            { x: 2.5, y: 1.4},
            { x: 3, y: 1.5},
            { x: 3.5, y: 2.3},
            { x: 4, y: 2.8},
        ],
        wallet: {
            value: "170432.86",
            crypto: "5.1"
        },
        transactionHistory: [
            {
                id: 1,
                description: "Sold Bitcoin",
                amount: -2.0034,
                currency: "BTC",
                type: "S",      // S - Sold, B - Bought
                date: "14:20 12 Apr"
            },
            {
                id: 2,
                description: "Bought Bitcoin",
                amount: -2.0034,
                currency: "BTC",
                type: "B",
                date: "14:20 12 Apr"
            },
            {
                id: 3,
                description: "Sold Bitcoin",
                amount: -2.0034,
                currency: "BTC",
                type: "S",
                date: "14:20 12 Apr"
            },
            {
                id: 4,
                description: "Bought Bitcoin",
                amount: -2.0034,
                currency: "BTC",
                type: "B",
                date: "14:20 12 Apr"
            },
            {
                id: 5,
                description: "Sold Bitcoin",
                amount: -2.0034,
                currency: "BTC",
                type: "S",
                date: "14:20 12 Apr"
            },
            {
                id: 6,
                description: "Bought Bitcoin",
                amount: -2.0034,
                currency: "BTC",
                type: "B",
                date: "14:20 12 Apr"
            },
            {
                id: 7,
                description: "Sold Bitcoin",
                amount: -2.0034,
                currency: "BTC",
                type: "S",
                date: "14:20 12 Apr"
            },
            {
                id: 8,
                description: "Bought Bitcoin",
                amount: -2.0034,
                currency: "BTC",
                type: "B",
                date: "14:20 12 Apr"
            },
        ]
    },
    {
        id: 2,
        currency: "Ethereum",
        code: "ETH",
        image: require("../assets/images/ethereum.png"),
        amount: "919.03",
        changes: "-0.73%",
        type: "D",
        description: "Ethereum is a decentralized blockchain platform that establishes a peer-to-peer network that securely executes and verifies application code, called smart contracts. Smart contracts allow participants to transact with each other without a trusted central authority.",
        chartData: [
            { x: 1, y: 2},
            { x: 1.5, y: 2.3},
            { x: 2, y: 2},
            { x: 2.5, y: 2.2},
            { x: 3, y: 1.5},
            { x: 3.5, y: 2.1},
            { x: 4, y: 2.5},
        ],
        wallet: {
            value: "18409.24",
            crypto: "13.7"
        },
        transactionHistory: [
            {
                id: 1,
                description: "Sold Ethereum",
                amount: -2.0034,
                currency: "ETH",
                type: "S",      // S - Sold, B - Bought
                date: "14:20 12 Apr"
            },
            {
                id: 2,
                description: "Bought Ethereum",
                amount: -2.0034,
                currency: "ETH",
                type: "B",
                date: "14:20 12 Apr"
            },
            {
                id: 3,
                description: "Sold Ethereum",
                amount: -2.0034,
                currency: "ETH",
                type: "S",
                date: "14:20 12 Apr"
            },
            {
                id: 4,
                description: "Bought Ethereum",
                amount: -2.0034,
                currency: "ETH",
                type: "B",
                date: "14:20 12 Apr"
            },
            {
                id: 5,
                description: "Sold Ethereum",
                amount: -2.0034,
                currency: "ETH",
                type: "S",
                date: "14:20 12 Apr"
            },
            {
                id: 6,
                description: "Bought Ethereum",
                amount: -2.0034,
                currency: "ETH",
                type: "B",
                date: "14:20 12 Apr"
            },
            {
                id: 7,
                description: "Sold Ethereum",
                amount: -2.0034,
                currency: "ETH",
                type: "S",
                date: "14:20 12 Apr"
            },
            {
                id: 8,
                description: "Bought Ethereum",
                amount: -2.0034,
                currency: "ETH",
                type: "B",
                date: "14:20 12 Apr"
            },
        ]
    },
    {
        id: 3,
        currency: "Binance Coin",
        code: "BNB",
        image: require("../assets/images/binancecoin.png"),
        amount: "211.9",
        changes: "+1.79%",
        type: "I",
        description: "Binance Coin (BNB) is a cryptocurrency that can be used to trade and pay fees on the Binance cryptocurrency exchange. The Binance Exchange is the largest cryptocurrency exchange in the world as of January 2018, facilitating more than 1.4 million transactions per second.",
        chartData: [
            { x: 1.5, y: 2.3},
            { x: 1, y: 2},
            { x: 2, y: 2},
            { x: 4, y: 2.5},
            { x: 3, y: 1.5},
            { x: 3.5, y: 2.1},
            { x: 2.5, y: 2.2},
        ],
        wallet: {
            value: "18409.24",
            crypto: "13.7"
        },
        transactionHistory: [
            {
                id: 1,
                description: "Sold BNB",
                amount: -2.0034,
                currency: "BNB",
                type: "S",      // S - Sold, B - Bought
                date: "14:20 12 Apr"
            },
            {
                id: 2,
                description: "Bought BNB",
                amount: -2.0034,
                currency: "BNB",
                type: "B",
                date: "14:20 12 Apr"
            },
            {
                id: 3,
                description: "Sold BNB",
                amount: -2.0034,
                currency: "BNB",
                type: "S",
                date: "14:20 12 Apr"
            },
            {
                id: 4,
                description: "Bought BNB",
                amount: -2.0034,
                currency: "BNB",
                type: "B",
                date: "14:20 12 Apr"
            },
            {
                id: 5,
                description: "Sold BNB",
                amount: -2.0034,
                currency: "BNB",
                type: "S",
                date: "14:20 12 Apr"
            },
            {
                id: 6,
                description: "Bought BNB",
                amount: -2.0034,
                currency: "BNB",
                type: "B",
                date: "14:20 12 Apr"
            },
            {
                id: 7,
                description: "Sold BNB",
                amount: -2.0034,
                currency: "BNB",
                type: "S",
                date: "14:20 12 Apr"
            },
            {
                id: 8,
                description: "Bought BNB",
                amount: -2.0034,
                currency: "BNB",
                type: "B",
                date: "14:20 12 Apr"
            },
        ]
    },
    {
        id: 4,
        currency: "CyberConnect",
        code: "CYBER",
        image: require("../assets/images/cyberconnect.png"),
        amount: "5.164769",
        changes: "+2.81%",
        type: "I",
        description: "CyberConnect is a Web3 social network that allows developers to build social applications that empower users to take control of their digital identity, content, connections, and interactions. Utilizing CyberConnect's technology, specifically CyberAccount, the collaboration focuses on refining Animoca Brands' NFT landscape. The integration of CyberAccount with Mocaverse's identification layer offers fresh opportunities for Animoca Brands-related entities. It enables seamless connections across a variety of games, businesses, and services.",
        chartData: [
            { x: 4, y: 2.5},
            { x: 3, y: 1.5},
            { x: 2, y: 2},
            { x: 2.5, y: 2.2},
            { x: 3.5, y: 2.1},
            { x: 1.5, y: 2.3},
            { x: 1, y: 2},
        ],
        wallet: {
            value: "534.24",
            crypto: "2.4"
        },
        transactionHistory: [
            {
                id: 1,
                description: "Sold CyberConnect",
                amount: -2.0034,
                currency: "Cyber",
                type: "S",      // S - Sold, B - Bought
                date: "14:20 12 Apr"
            },
            {
                id: 2,
                description: "Bought CyberConnect",
                amount: -2.0034,
                currency: "Cyber",
                type: "B",
                date: "14:20 12 Apr"
            },
            {
                id: 3,
                description: "Sold CyberConnect",
                amount: -2.0034,
                currency: "Cyber",
                type: "S",
                date: "14:20 12 Apr"
            },
            {
                id: 4,
                description: "Bought CyberConnect",
                amount: -2.0034,
                currency: "Cyber",
                type: "B",
                date: "14:20 12 Apr"
            },
            {
                id: 5,
                description: "Sold CyberConnect",
                amount: -2.0034,
                currency: "Cyber",
                type: "S",
                date: "14:20 12 Apr"
            },
            {
                id: 6,
                description: "Bought CyberConnect",
                amount: -2.0034,
                currency: "Cyber",
                type: "B",
                date: "14:20 12 Apr"
            },
            {
                id: 7,
                description: "Sold CyberConnect",
                amount: -2.0034,
                currency: "Cyber",
                type: "S",
                date: "14:20 12 Apr"
            },
            {
                id: 8,
                description: "Bought CyberConnect",
                amount: -2.0034,
                currency: "Cyber",
                type: "B",
                date: "14:20 12 Apr"
            },
        ]
    },
]

export const transactionHistory = [
    {
        id: 1,
        description: "Sold BNB",
        amount: -2.0034,
        currency: "BNB",
        type: "S",      // S - Sold, B - Bought
        date: "14:20 12 Apr"
    },
    {
        id: 2,
        description: "Bought BNB",
        amount: -2.0034,
        currency: "BNB",
        type: "B",
        date: "14:20 12 Apr"
    },
    {
        id: 3,
        description: "Sold BNB",
        amount: -2.0034,
        currency: "BNB",
        type: "S",
        date: "14:20 12 Apr"
    },
    {
        id: 4,
        description: "Bought BNB",
        amount: -2.0034,
        currency: "BNB",
        type: "B",
        date: "14:20 12 Apr"
    },
    {
        id: 5,
        description: "Sold BNB",
        amount: -2.0034,
        currency: "BNB",
        type: "S",
        date: "14:20 12 Apr"
    },
    {
        id: 6,
        description: "Bought BNB",
        amount: -2.0034,
        currency: "BNB",
        type: "B",
        date: "14:20 12 Apr"
    },
    {
        id: 7,
        description: "Sold BNB",
        amount: -2.0034,
        currency: "BNB",
        type: "S",
        date: "14:20 12 Apr"
    },
    {
        id: 8,
        description: "Bought BNB",
        amount: -2.0034,
        currency: "BNB",
        type: "B",
        date: "14:20 12 Apr"
    },
]

const chartOptions = [
    {
        id: 1,
        label: "1 hr"
    },
    {
        id: 2,
        label: "3 Days"
    },
    {
        id: 3,
        label: "1 Week"
    },
    {
        id: 4,
        label: "1 Months"
    },
    {
        id: 5,
        label: "3 Months"
    },
]

const dummyData = { portfolio, trendingCurrencies, transactionHistory, chartOptions };

export default dummyData;