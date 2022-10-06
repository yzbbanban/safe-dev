import {ChainInfo, getChainsConfig, RPC_AUTHENTICATION} from '@gnosis.pm/safe-react-gateway-sdk'
import {setWeb3ReadOnly} from 'src/logic/wallets/getWeb3'

// Cache is required as loading Redux store directly is an anit-pattern
let chains: ChainInfo[] = []

export const getChains = (): ChainInfo[] => chains

export const loadChains = async () => {
    console.log("loadChains")
    //todo
    // const {results = []} = await getChainsConfig()
    const {results = []} = {
        results: [
            {
                "transactionService": "https://safe-transaction.bsc.gnosis.io",
                "chainId": "71",
                "chainName": "Conflux_Espace",
                "shortName": "cfx",
                "l2": true,
                "description": "Conflux testnet",
                "rpcUri": {
                    "authentication": "NO_AUTHENTICATION",
                    "value": "https://evmtestnet.confluxrpc.com"
                },
                "safeAppsRpcUri": {
                    "authentication": "NO_AUTHENTICATION",
                    "value": "https://evmtestnet.confluxrpc.com"
                },
                "publicRpcUri": {
                    "authentication": "NO_AUTHENTICATION",
                    "value": "https://evmtestnet.confluxrpc.com"
                },
                "blockExplorerUriTemplate": {
                    "address": "https://evmtestnet.confluxscan.net/address/{{address}}",
                    "txHash": "https://evmtestnet.confluxscan.net/tx/{{txHash}}",
                    "api": "https://api.bscscan.com/api?module={{module}}&action={{action}}&address={{address}}&apiKey={{apiKey}}"
                },
                "nativeCurrency": {
                    "name": "CFX",
                    "symbol": "CFX",
                    "decimals": 18,
                    "logoUri": "https://pbs.twimg.com/profile_images/1411729445929558023/hEt9Lch0_400x400.jpg"
                },
                "theme": {
                    "textColor": "#001428",
                    "backgroundColor": "rgba(0,127,255,0.48)"
                },
                "gasPrice": [],
                "disabledWallets": [
                    "fortmatic",
                    "lattice",
                    "tally"
                ],
                "features": [
                    "CONTRACT_INTERACTION",
                    "ERC721",
                    "SAFE_APPS",
                    "SAFE_TX_GAS_OPTIONAL",
                    "SPENDING_LIMIT",
                    "TX_SIMULATION"
                ]
            }]
    }
    console.log(results)
    // @ts-ignore
    chains = results
    // Set the initail web3 provider after loading chains
    setWeb3ReadOnly()
    console.log("xxxxxxxxxx")
}

// An empty template is required because `getChain()` uses `find()` on load
export const emptyChainInfo: ChainInfo = {
    transactionService: '',
    chainId: '',
    chainName: '',
    shortName: '',
    l2: false,
    description: '',
    rpcUri: {authentication: '' as RPC_AUTHENTICATION, value: ''},
    publicRpcUri: {authentication: '' as RPC_AUTHENTICATION, value: ''},
    safeAppsRpcUri: {authentication: '' as RPC_AUTHENTICATION, value: ''},
    blockExplorerUriTemplate: {
        address: '',
        txHash: '',
        api: '',
    },
    nativeCurrency: {
        name: '',
        symbol: '',
        decimals: 0,
        logoUri: '',
    },
    theme: {textColor: '', backgroundColor: ''},
    ensRegistryAddress: '',
    gasPrice: [],
    disabledWallets: [],
    features: [],
}
