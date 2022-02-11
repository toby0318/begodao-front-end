export const THE_GRAPH_URL = "https://api.thegraph.com/subgraphs/name/drondin/olympus-graph";
export const EPOCH_INTERVAL = 2200;

// NOTE could get this from an outside source since it changes slightly over time
export const BLOCK_RATE_SECONDS = 0.7;

export const TOKEN_DECIMALS = 9;

export const POOL_GRAPH_URLS = {
  1337: "https://api.thegraph.com/subgraphs/name/pooltogether/rinkeby-v3_4_3",
  250: "https://api.thegraph.com/subgraphs/name/pooltogether/rinkeby-v3_4_3",
  4002: "https://api.thegraph.com/subgraphs/name/pooltogether/rinkeby-v3_4_3",
  4: "https://api.thegraph.com/subgraphs/name/pooltogether/rinkeby-v3_4_3",
  1: "https://api.thegraph.com/subgraphs/name/pooltogether/pooltogether-v3_4_3",
};

export const API_URL = "https://daoback.begoiko.com";

interface IAddresses {
  [key: number]: { [key: string]: string };
}

export const addresses: IAddresses = {
  1337: {
    DAI_ADDRESS: "0x7b418ffeB822B6caa791C087e40d6624c39B4Fa8",
    BEGO_ADDRESS: "0xA03dAcd0C553F64A4675e5E9040CC0B69Eab8c64",
    STAKING_ADDRESS: "0x90838E686942AB82b6478452c8297E7ef2B9a976",
    STAKING_HELPER_ADDRESS: "0x3d6C22605415C38488D70427a5a63EC4C4d05951",
    SBEGO_ADDRESS: "0x3fd3c471E98837ed8D8dda7ce99c0c0FC76Ac7D7",
    DISTRIBUTOR_ADDRESS: "0x06E20EA329dF5b7539F6a4c8F129f0A74087af2C",
    BONDINGCALC_ADDRESS: "0x31664c503157447C875a4B6862cd9e249C48d751",
    TREASURY_ADDRESS: "0xB257d33A5000fbfE8A71F7E1c2f021aD979FE4E8",
  },
  250: {
    DAI_ADDRESS: "0x8d11ec38a3eb5e956b052f67da8bdc9bef8abf3e",
    BEGO_ADDRESS: "0xe961c722515657C375Fb0D504953041876C34e94",
    STAKING_ADDRESS: "0x81416002c3b22496f8f1cd2522078cd3ac332b67",
    STAKING_HELPER_ADDRESS: "0xec2dc88818d1cf91e2af6a69562e646ec106a831",
    SBEGO_ADDRESS: "0x2cf1a3efa1f0b82ca5fa109ee418a257b2276e4d",
    DISTRIBUTOR_ADDRESS: "0xd02182b71c01d5ac4f5abff9f6df9a5a28f29969",
    BONDINGCALC_ADDRESS: "0x782938d7f9f37bd8bb4faf049e0eb8c23b37ef4a",
    TREASURY_ADDRESS: "0x7e733382cf18637be0a726b798c0125cbeee8b51",
    PRESALE_ADDRESS: "0xB9c58543879e15eddDDAf90aE85601c03F940dAC",
  },
  4: {
    DAI_ADDRESS: "0xB2180448f8945C8Cc8AE9809E67D6bd27d8B2f2C", // duplicate
    BEGO_ADDRESS: "0xC0b491daBf3709Ee5Eb79E603D73289Ca6060932",
    STAKING_ADDRESS: "0xC5d3318C0d74a72cD7C55bdf844e24516796BaB2",
    STAKING_HELPER_ADDRESS: "0xf73f23Bb0edCf4719b12ccEa8638355BF33604A1",
    OLD_STAKING_ADDRESS: "0xb640AA9082ad720c60102489b806E665d67DCE32",
    SBEGO_ADDRESS: "0x1Fecda1dE7b6951B248C0B62CaeBD5BAbedc2084",
    OLD_SBEGO_ADDRESS: "0x8Fc4167B0bdA22cb9890af2dB6cB1B818D6068AE",
    MIGRATE_ADDRESS: "0x3BA7C6346b93DA485e97ba55aec28E8eDd3e33E2",
    DISTRIBUTOR_ADDRESS: "0x0626D5aD2a230E05Fb94DF035Abbd97F2f839C3a",
    BONDINGCALC_ADDRESS: "0xaDBE4FA3c2fcf36412D618AfCfC519C869400CEB",
    CIRCULATING_SUPPLY_ADDRESS: "0x5b0AA7903FD2EaA16F1462879B71c3cE2cFfE868",
    TREASURY_ADDRESS: "0x0d722D813601E48b7DAcb2DF9bae282cFd98c6E7",
    REDEEM_HELPER_ADDRESS: "0xBd35d8b2FDc2b720842DB372f5E419d39B24781f",
    PT_TOKEN_ADDRESS: "0x0a2d026bacc573a8b5a2b049f956bdf8e5256cfd", // 33T token address, taken from `ticket` function on PRIZE_STRATEGY_ADDRESS
    PT_PRIZE_POOL_ADDRESS: "0xf9081132864ed5e4980CFae83bDB122d86619281", // NEW
    PT_PRIZE_STRATEGY_ADDRESS: "0x2Df17EA8D6B68Ec444c9a698315AfB36425dac8b", // NEW
  },
  4002: {
    DAI_ADDRESS: "0x3A5b6631aD2Bd2b82fd3C5c4007937F14fa809b9",
    BEGO_ADDRESS: "0x10E856020D4B55d944D4859e764d335ecff6C5bE",
    STAKING_ADDRESS: "0xcDe2557BEa46a841488Ef4394999Ee941c65907b",
    STAKING_HELPER_ADDRESS: "0x20CD89e19cDa8374E78e7eeC66D0bEc11D6Ef40f",
    SBEGO_ADDRESS: "0x3eFbC6719A1EE8536486dC0d6e762E1DEb148ca4",
    DISTRIBUTOR_ADDRESS: "0xdEDf583A6b3A2854A241705895c2E42733CaEd5B",
    BONDINGCALC_ADDRESS: "0x6a5555eA1c8434a216C015aaA2208FCee04F6084",
    TREASURY_ADDRESS: "0xe680A99e3A12BDb055A7Ea3d52dE2881790DE0B4",
    FACTORY_ADDRESS: "0xb2c9d73f632e6e99c3b21ac8e96a71c2d0d33039",
    PRESALE_ADDRESS: "0x71fE614f5287ca95e9a3ebF7b1A80B8F6a0200bF",
    WFTM_ADDRESS: "0xf1903E0264FaC93Be0163c142DB647B93b3ce0d4",
    REDEEM_HELPER_ADDRESS: "0x4439e344E6715b4475C3bF0bF3117878c8eAC538",
  },
  1: {
    DAI_ADDRESS: "0x6b175474e89094c44da98b954eedeac495271d0f", // duplicate
    BEGO_ADDRESS: "0x383518188c0c6d7730d91b2c03a03c837814a899",
    STAKING_ADDRESS: "0xD8942f6Ad17206ec1699C32934965CE27F5D05d1", // The new staking contract
    STAKING_HELPER_ADDRESS: "0xfFD5198597e46A88099d0F67B139612CDF648E41", // Helper contract used for Staking only
    OLD_STAKING_ADDRESS: "0x0822F3C03dcc24d200AFF33493Dc08d0e1f274A2",
    SBEGO_ADDRESS: "0xc8Aa8b1345Ab7aD6ae01397051389cff4df5ECda",
    OLD_SBEGO_ADDRESS: "0x31932E6e45012476ba3A3A4953cbA62AeE77Fbbe",
    PRESALE_ADDRESS: "0xcBb60264fe0AC96B0EFa0145A9709A825afa17D8",
    ABEGO_ADDRESS: "0x24ecfd535675f36ba1ab9c5d39b50dc097b0792e",
    MIGRATE_ADDRESS: "0xC7f56EC779cB9e60afA116d73F3708761197dB3d",
    DISTRIBUTOR_ADDRESS: "0xbe731507810C8747C3E01E62c676b1cA6F93242f",
    BONDINGCALC_ADDRESS: "0xcaaa6a2d4b26067a391e7b7d65c16bb2d5fa571a",
    CIRCULATING_SUPPLY_ADDRESS: "0x0efff9199aa1ac3c3e34e957567c1be8bf295034",
    TREASURY_ADDRESS: "0x31f8cc382c9898b273eff4e0b7626a6987c846e8",
    CRUCIBLE_OHM_LUSD: "0x2230ad29920D61A535759678191094b74271f373",
    LQTY: "0x6dea81c8171d0ba574754ef6f8b412f2ed88c54d",
    MIST: "0x88acdd2a6425c3faae4bc9650fd7e27e0bebb7ab",
    REDEEM_HELPER_ADDRESS: "0xE1e83825613DE12E8F0502Da939523558f0B819E",
    FUSE_6_SOHM: "0x59bd6774c22486d9f4fab2d448dce4f892a9ae25", // Tetranode's Locker
    FUSE_18_SOHM: "0x6eDa4b59BaC787933A4A21b65672539ceF6ec97b", // Olympus Pool Party
    PT_TOKEN_ADDRESS: "0x0E930b8610229D74Da0A174626138Deb732cE6e9", // 33T token address, taken from `ticket` function on PRIZE_STRATEGY_ADDRESS
    PT_PRIZE_POOL_ADDRESS: "0xEaB695A8F5a44f583003A8bC97d677880D528248", // NEW
    PT_PRIZE_STRATEGY_ADDRESS: "0xf3d253257167c935f8C62A02AEaeBB24c9c5012a", // NEW
  },
};
