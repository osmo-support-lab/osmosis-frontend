import { IS_FRONTIER, IS_TESTNET } from "./env";

/** UI will go into "halt mode" if `true`. */
export const IS_HALTED = false;

export const UserAction: { [key: string]: boolean } = {
  CreateNewPool: true,
};

// Fiat ramps
export const BUY_OSMO_TRANSAK = true;

export const HiddenPoolIds: string[] = [];

export const RecommendedSwapDenoms = [
  "OSMO",
  "USDC",
  "ATOM",
  "DAI",
  "JUNO",
  "EVMOS",
];

export const UnPoolWhitelistedPoolIds: { [poolId: string]: boolean } = {
  // #560 (UST/OSMO)
  // #562 (UST/LUNA)
  // #567 (UST/EEUR)
  // #578 (UST/XKI)
  // #592 (UST/BTSG)
  // #610 (UST/CMDX)
  // #612 (UST/XPRT)
  // #615 (UST/LUM)
  // #642 (UST/UMEE)
  // #679 (UST/axl-FRAX/axl-USDT/axl-USDC)
  // #580 (UST/JUNO)
  // #635 (UST/g-USDC/g-DAI)
  "560": true,
  "562": true,
  "567": true,
  "578": true,
  "592": true,
  "610": true,
  "612": true,
  "615": true,
  "642": true,
  "679": true,
  "580": true,
  "635": true,
};

/** List of pools active in LBP to present in frontend. */
export const PromotedLBPPoolIds: {
  poolId: string;
  name: string;
  ibcHashDenom: string;
}[] = IS_FRONTIER
  ? [
      /*      {
        poolId: "813",
        name: "REBUS Liquidity Bootstrapping Pool",
        ibcHashDenom: DenomHelper.ibcDenom(
          [{ portId: "transfer", channelId: "channel-355" }],
          "arebus"
        ),
      },*/
    ]
  : [];

const TestnetExternalIncentiveGaugeAllowList: {
  [poolId: string]: {
    gaugeId: string;
    denom: string;
  }[];
} = {
  "762": [
    {
      gaugeId: "2508",
      denom: "uosmo",
    },
    {
      gaugeId: "2509",
      denom: "uosmo",
    },
    {
      gaugeId: "2510",
      denom: "uosmo",
    },
  ],
};

const MainnetExternalIncentiveGaugeAllowList: {
  [poolId: string]: {
    gaugeId: string;
    denom: string;
  }[];
} = {
  "5": [
    {
      gaugeId: "1891",
      denom:
        "ibc/9712DBB13B9631EDFA9BF61B55F1B2D290B2ADB67E3A4EB3A875F3B6081B3B84",
    },
    {
      gaugeId: "1892",
      denom:
        "ibc/9712DBB13B9631EDFA9BF61B55F1B2D290B2ADB67E3A4EB3A875F3B6081B3B84",
    },
    {
      gaugeId: "1893",
      denom:
        "ibc/9712DBB13B9631EDFA9BF61B55F1B2D290B2ADB67E3A4EB3A875F3B6081B3B84",
    },
  ],
  "6": [
    {
      gaugeId: "1894",
      denom:
        "ibc/9712DBB13B9631EDFA9BF61B55F1B2D290B2ADB67E3A4EB3A875F3B6081B3B84",
    },
    {
      gaugeId: "1895",
      denom:
        "ibc/9712DBB13B9631EDFA9BF61B55F1B2D290B2ADB67E3A4EB3A875F3B6081B3B84",
    },
    {
      gaugeId: "1896",
      denom:
        "ibc/9712DBB13B9631EDFA9BF61B55F1B2D290B2ADB67E3A4EB3A875F3B6081B3B84",
    },
  ],
  "553": [
    {
      gaugeId: "29762",
      denom:
        "ibc/9989AD6CCA39D1131523DB0617B50F6442081162294B4795E26746292467B525",
    },
  ],
  "604": [
    {
      gaugeId: "30130",
      denom:
        "ibc/987C17B11ABC2B20019178ACE62929FE9840202CE79498E29FE8E5CB02B7C0A4",
    },
  ],
  "611": [
    {
      gaugeId: "30131",
      denom:
        "ibc/987C17B11ABC2B20019178ACE62929FE9840202CE79498E29FE8E5CB02B7C0A4",
    },
  ],
  "613": [
    {
      gaugeId: "29537",
      denom:
        "ibc/E7B35499CFBEB0FF5778127ABA4FB2C4B79A6B8D3D831D4379C4048C238796BD",
    },
    {
      gaugeId: "29538",
      denom:
        "ibc/E7B35499CFBEB0FF5778127ABA4FB2C4B79A6B8D3D831D4379C4048C238796BD",
    },
  ],
  "621": [
    {
      gaugeId: "2020",
      denom:
        "ibc/307E5C96C8F60D1CBEE269A9A86C0834E1DB06F2B3788AE4F716EDB97A48B97D",
    },
  ],
  "625": [
    {
      gaugeId: "29858",
      denom:
        "ibc/E97634A40119F1898989C2A23224ED83FDD0A57EA46B3A094E287288D1672B44",
    },
  ],
  "633": [
    {
      gaugeId: "29857",
      denom:
        "ibc/E97634A40119F1898989C2A23224ED83FDD0A57EA46B3A094E287288D1672B44",
    },
  ],
  "634": [
    {
      gaugeId: "29856",
      denom:
        "ibc/E97634A40119F1898989C2A23224ED83FDD0A57EA46B3A094E287288D1672B44",
    },
  ],
  "649": [
    {
      gaugeId: "29521",
      denom:
        "ibc/DB9755CB6FE55192948AE074D18FA815E1429D3D374D5BDA8D89623C6CF235C3",
    },
    {
      gaugeId: "29522",
      denom:
        "ibc/F6B691D5F7126579DDC87357B09D653B47FDCE0A3383FF33C8D8B544FE29A8A6",
    },
  ],
  "662": [
    {
      gaugeId: "29666",
      denom:
        "ibc/41999DF04D9441DAC0DF5D8291DF4333FBCBA810FFD63FDCE34FDF41EF37B6F7",
    },
    {
      gaugeId: "29667",
      denom:
        "ibc/41999DF04D9441DAC0DF5D8291DF4333FBCBA810FFD63FDCE34FDF41EF37B6F7",
    },
  ],
  "722": [
    {
      gaugeId: "29822",
      denom:
        "ibc/6AE98883D4D5D5FF9E50D7130F1305DA2FFA0C652D1DD9C123657C6B4EB2DF8A",
    },
  ],
  "747": [
    {
      gaugeId: "4700",
      denom:
        "ibc/49C2B2C444B7C5F0066657A4DBF19D676E0D185FF721CFD3E14FA253BCB9BC04",
    },
  ],
  "751": [
    {
      gaugeId: "29775",
      denom:
        "ibc/7ABF696369EFB3387DF22B6A24204459FE5EFD010220E8E5618DC49DB877047B",
    },
    {
      gaugeId: "29776",
      denom:
        "ibc/7ABF696369EFB3387DF22B6A24204459FE5EFD010220E8E5618DC49DB877047B",
    },
    {
      gaugeId: "29777",
      denom:
        "ibc/7ABF696369EFB3387DF22B6A24204459FE5EFD010220E8E5618DC49DB877047B",
    },
  ],
  "756": [
    {
      gaugeId: "29791",
      denom:
        "ibc/56C276FC136E239449DCE664292DBEEF5795C4EF4B5B35DB98BD1C0948274867",
    },
    {
      gaugeId: "29792",
      denom:
        "ibc/56C276FC136E239449DCE664292DBEEF5795C4EF4B5B35DB98BD1C0948274867",
    },
    {
      gaugeId: "29793",
      denom:
        "ibc/56C276FC136E239449DCE664292DBEEF5795C4EF4B5B35DB98BD1C0948274867",
    },
  ],
  "757": [
    {
      gaugeId: "29794",
      denom:
        "ibc/051A38BBEF92B9D8293AFBE1FA293E704359E9CB28297A0FD5DBA3E9CCEE9AB1",
    },
    {
      gaugeId: "29795",
      denom:
        "ibc/051A38BBEF92B9D8293AFBE1FA293E704359E9CB28297A0FD5DBA3E9CCEE9AB1",
    },
    {
      gaugeId: "29796",
      denom:
        "ibc/051A38BBEF92B9D8293AFBE1FA293E704359E9CB28297A0FD5DBA3E9CCEE9AB1",
    },
  ],
  "758": [
    {
      gaugeId: "29797",
      denom:
        "ibc/B797E4F42CD33C50511B341E50C5CC0E8EF0D93B1E1247ABAA071583B8619202",
    },
    {
      gaugeId: "29798",
      denom:
        "ibc/B797E4F42CD33C50511B341E50C5CC0E8EF0D93B1E1247ABAA071583B8619202",
    },
    {
      gaugeId: "29799",
      denom:
        "ibc/B797E4F42CD33C50511B341E50C5CC0E8EF0D93B1E1247ABAA071583B8619202",
    },
  ],
  "759": [
    {
      gaugeId: "29800",
      denom:
        "ibc/E4FFAACCDB7D55CE2D257DF637C00158CB841F11D0013B2D03E31FF7800A2C58",
    },
    {
      gaugeId: "29801",
      denom:
        "ibc/E4FFAACCDB7D55CE2D257DF637C00158CB841F11D0013B2D03E31FF7800A2C58",
    },
    {
      gaugeId: "29802",
      denom:
        "ibc/E4FFAACCDB7D55CE2D257DF637C00158CB841F11D0013B2D03E31FF7800A2C58",
    },
  ],
  "760": [
    {
      gaugeId: "29803",
      denom:
        "ibc/C9864D1B9623F703C75BBF72B7FF8A7317E1535C96538D21467A4311246DC3B5",
    },
    {
      gaugeId: "29804",
      denom:
        "ibc/C9864D1B9623F703C75BBF72B7FF8A7317E1535C96538D21467A4311246DC3B5",
    },
    {
      gaugeId: "29805",
      denom:
        "ibc/C9864D1B9623F703C75BBF72B7FF8A7317E1535C96538D21467A4311246DC3B5",
    },
  ],
  "761": [
    {
      gaugeId: "29806",
      denom:
        "ibc/8A07D4BD40E0F44ECFDF360F7EA7008B288926FB87C54489FE54DB81A5340E0C",
    },
    {
      gaugeId: "29807",
      denom:
        "ibc/8A07D4BD40E0F44ECFDF360F7EA7008B288926FB87C54489FE54DB81A5340E0C",
    },
    {
      gaugeId: "29808",
      denom:
        "ibc/8A07D4BD40E0F44ECFDF360F7EA7008B288926FB87C54489FE54DB81A5340E0C",
    },
  ],
  "762": [
    {
      gaugeId: "29809",
      denom:
        "ibc/6A6174468758D207DD2D880363BF699C6568A29E87651337AEDAFD9E69EA7E58",
    },
    {
      gaugeId: "29810",
      denom:
        "ibc/6A6174468758D207DD2D880363BF699C6568A29E87651337AEDAFD9E69EA7E58",
    },
    {
      gaugeId: "29811",
      denom:
        "ibc/6A6174468758D207DD2D880363BF699C6568A29E87651337AEDAFD9E69EA7E58",
    },
  ],
  "763": [
    {
      gaugeId: "29812",
      denom:
        "ibc/022A879A5301CBCACF96216C967805F15C33C615B74DC7236027C1BA1BF664FF",
    },
    {
      gaugeId: "29813",
      denom:
        "ibc/022A879A5301CBCACF96216C967805F15C33C615B74DC7236027C1BA1BF664FF",
    },
    {
      gaugeId: "29814",
      denom:
        "ibc/022A879A5301CBCACF96216C967805F15C33C615B74DC7236027C1BA1BF664FF",
    },
  ],
  "764": [
    {
      gaugeId: "29815",
      denom:
        "ibc/C1CEF00F016FE89EA6E5B07DA895AACD91B0AAD69A991033D846B988AD4FB69D",
    },
    {
      gaugeId: "29816",
      denom:
        "ibc/C1CEF00F016FE89EA6E5B07DA895AACD91B0AAD69A991033D846B988AD4FB69D",
    },
    {
      gaugeId: "29817",
      denom:
        "ibc/C1CEF00F016FE89EA6E5B07DA895AACD91B0AAD69A991033D846B988AD4FB69D",
    },
  ],
  "765": [
    {
      gaugeId: "29778",
      denom:
        "ibc/423967B46B1A51D78619085105B04FCFA14F7CBC0BE7539A316B2DCDFC7D8C07",
    },
    {
      gaugeId: "29779",
      denom:
        "ibc/423967B46B1A51D78619085105B04FCFA14F7CBC0BE7539A316B2DCDFC7D8C07",
    },
    {
      gaugeId: "29780",
      denom:
        "ibc/423967B46B1A51D78619085105B04FCFA14F7CBC0BE7539A316B2DCDFC7D8C07",
    },
  ],
  "766": [
    {
      gaugeId: "29781",
      denom:
        "ibc/1DE9A32D603EE05E9B8619DF24D90FD518C932AE0B5B3209A986B7262DBADE2A",
    },
    {
      gaugeId: "29782",
      denom:
        "ibc/1DE9A32D603EE05E9B8619DF24D90FD518C932AE0B5B3209A986B7262DBADE2A",
    },
    {
      gaugeId: "29783",
      denom:
        "ibc/1DE9A32D603EE05E9B8619DF24D90FD518C932AE0B5B3209A986B7262DBADE2A",
    },
  ],
  "767": [
    {
      gaugeId: "29784",
      denom:
        "ibc/239A507997222805E441956EBE8087D7E2D05D6535C6D4C75EF8DCF83B3DE1A1",
    },
    {
      gaugeId: "29785",
      denom:
        "ibc/239A507997222805E441956EBE8087D7E2D05D6535C6D4C75EF8DCF83B3DE1A1",
    },
    {
      gaugeId: "29786",
      denom:
        "ibc/239A507997222805E441956EBE8087D7E2D05D6535C6D4C75EF8DCF83B3DE1A1",
    },
  ],
  "768": [
    {
      gaugeId: "29787",
      denom:
        "ibc/B3FB7128CE957DE1ADB687A919AA0786C77C62FB1280C07CDD78AEA032D56853",
    },
    {
      gaugeId: "29788",
      denom:
        "ibc/B3FB7128CE957DE1ADB687A919AA0786C77C62FB1280C07CDD78AEA032D56853",
    },
    {
      gaugeId: "29789",
      denom:
        "ibc/B3FB7128CE957DE1ADB687A919AA0786C77C62FB1280C07CDD78AEA032D56853",
    },
  ],
  "777": [
    {
      gaugeId: "21813",
      denom:
        "ibc/C360EF34A86D334F625E4CBB7DA3223AEA97174B61F35BB3758081A8160F7D9B",
    },
    {
      gaugeId: "21814",
      denom:
        "ibc/C360EF34A86D334F625E4CBB7DA3223AEA97174B61F35BB3758081A8160F7D9B",
    },
    {
      gaugeId: "29459",
      denom:
        "ibc/9B6FBABA36BB4A3BF127AE5E96B572A5197FD9F3111D895D8919B07BC290764A",
    },
    {
      gaugeId: "29460",
      denom:
        "ibc/9B6FBABA36BB4A3BF127AE5E96B572A5197FD9F3111D895D8919B07BC290764A",
    },
    {
      gaugeId: "29461",
      denom:
        "ibc/9B6FBABA36BB4A3BF127AE5E96B572A5197FD9F3111D895D8919B07BC290764A",
    },
    {
      gaugeId: "29611",
      denom:
        "ibc/0CD46223FEABD2AEAAAF1F057D01E63BCA79B7D4BD6B68F1EB973A987344695D",
    },
  ],
  "778": [
    {
      gaugeId: "21818",
      denom:
        "ibc/52C57FCA7D6854AA178E7A183DDBE4EF322B904B1D719FC485F6FFBC1F72A19E",
    },
    {
      gaugeId: "21818",
      denom:
        "ibc/7C781B4C2082CD62129A972D47486D78EC17155C299270E3C89348EA026BEAF8",
    },
    {
      gaugeId: "21820",
      denom:
        "ibc/52C57FCA7D6854AA178E7A183DDBE4EF322B904B1D719FC485F6FFBC1F72A19E",
    },
    {
      gaugeId: "21820",
      denom:
        "ibc/7C781B4C2082CD62129A972D47486D78EC17155C299270E3C89348EA026BEAF8",
    },
    {
      gaugeId: "21821",
      denom:
        "ibc/52C57FCA7D6854AA178E7A183DDBE4EF322B904B1D719FC485F6FFBC1F72A19E",
    },
    {
      gaugeId: "21821",
      denom:
        "ibc/7C781B4C2082CD62129A972D47486D78EC17155C299270E3C89348EA026BEAF8",
    },
    {
      gaugeId: "29380",
      denom:
        "ibc/7C781B4C2082CD62129A972D47486D78EC17155C299270E3C89348EA026BEAF8",
    },
    {
      gaugeId: "29381",
      denom:
        "ibc/7C781B4C2082CD62129A972D47486D78EC17155C299270E3C89348EA026BEAF8",
    },
    {
      gaugeId: "29382",
      denom:
        "ibc/7C781B4C2082CD62129A972D47486D78EC17155C299270E3C89348EA026BEAF8",
    },
  ],
  "787": [
    {
      gaugeId: "29462",
      denom:
        "ibc/9B6FBABA36BB4A3BF127AE5E96B572A5197FD9F3111D895D8919B07BC290764A",
    },
  ],
  "788": [
    {
      gaugeId: "29872",
      denom:
        "ibc/FFA652599C77E853F017193E36B5AB2D4D9AFC4B54721A74904F80C9236BF3B7",
    },
    {
      gaugeId: "29892",
      denom:
        "ibc/FFA652599C77E853F017193E36B5AB2D4D9AFC4B54721A74904F80C9236BF3B7",
    },
    {
      gaugeId: "29893",
      denom:
        "ibc/FFA652599C77E853F017193E36B5AB2D4D9AFC4B54721A74904F80C9236BF3B7",
    },
  ],
  "790": [
    {
      gaugeId: "29508",
      denom:
        "ibc/52C57FCA7D6854AA178E7A183DDBE4EF322B904B1D719FC485F6FFBC1F72A19E",
    },
    {
      gaugeId: "29508",
      denom:
        "ibc/7C781B4C2082CD62129A972D47486D78EC17155C299270E3C89348EA026BEAF8",
    },
    {
      gaugeId: "29509",
      denom:
        "ibc/52C57FCA7D6854AA178E7A183DDBE4EF322B904B1D719FC485F6FFBC1F72A19E",
    },
    {
      gaugeId: "29509",
      denom:
        "ibc/7C781B4C2082CD62129A972D47486D78EC17155C299270E3C89348EA026BEAF8",
    },
    {
      gaugeId: "29510",
      denom:
        "ibc/52C57FCA7D6854AA178E7A183DDBE4EF322B904B1D719FC485F6FFBC1F72A19E",
    },
    {
      gaugeId: "29510",
      denom:
        "ibc/7C781B4C2082CD62129A972D47486D78EC17155C299270E3C89348EA026BEAF8",
    },
  ],
  "793": [
    {
      gaugeId: "29949",
      denom:
        "ibc/18A676A074F73B9B42DA4F9DFC8E5AEF334C9A6636DDEC8D34682F52F1DECDF6",
    },
  ],
  "803": [
    {
      gaugeId: "30230",
      denom:
        "ibc/A8CA5EE328FA10C9519DF6057DA1F69682D28F7D0F5CCC7ECB72E3DCA2D157A4",
    },
  ],
  "805": [
    {
      gaugeId: "29615",
      denom:
        "ibc/0CD46223FEABD2AEAAAF1F057D01E63BCA79B7D4BD6B68F1EB973A987344695D",
    },
  ],
  "806": [
    {
      gaugeId: "29683",
      denom: "uosmo",
    },
  ],
  "807": [
    {
      gaugeId: "29950",
      denom:
        "ibc/18A676A074F73B9B42DA4F9DFC8E5AEF334C9A6636DDEC8D34682F52F1DECDF6",
    },
  ],
  "808": [
    {
      gaugeId: "29951",
      denom:
        "ibc/18A676A074F73B9B42DA4F9DFC8E5AEF334C9A6636DDEC8D34682F52F1DECDF6",
    },
  ],
  "810": [
    {
      gaugeId: "30231",
      denom:
        "ibc/A8CA5EE328FA10C9519DF6057DA1F69682D28F7D0F5CCC7ECB72E3DCA2D157A4",
    },
  ],
  "813": [
    {
      gaugeId: "30251",
      denom:
        "ibc/A1AC7F9EE2F643A68E3A35BCEB22040120BEA4059773BB56985C76BDFEBC71D9",
    },
    {
      gaugeId: "30252",
      denom:
        "ibc/A1AC7F9EE2F643A68E3A35BCEB22040120BEA4059773BB56985C76BDFEBC71D9",
    },
  ],
  "816": [
    {
      gaugeId: "29758",
      denom:
        "ibc/EB7FB9C8B425F289B63703413327C2051030E848CE4EAAEA2E51199D6D39D3EC",
    },
    {
      gaugeId: "29759",
      denom:
        "ibc/EB7FB9C8B425F289B63703413327C2051030E848CE4EAAEA2E51199D6D39D3EC",
    },
    {
      gaugeId: "29760",
      denom:
        "ibc/EB7FB9C8B425F289B63703413327C2051030E848CE4EAAEA2E51199D6D39D3EC",
    },
  ],
  "817": [
    {
      gaugeId: "30144",
      denom:
        "ibc/A8CA5EE328FA10C9519DF6057DA1F69682D28F7D0F5CCC7ECB72E3DCA2D157A4",
    },
  ],
  "818": [
    {
      gaugeId: "29853",
      denom:
        "ibc/E97634A40119F1898989C2A23224ED83FDD0A57EA46B3A094E287288D1672B44",
    },
  ],
  "826": [
    {
      gaugeId: "30272",
      denom:
        "ibc/80825E8F04B12D914ABEADB1F4D39C04755B12C8402F6876EE3168450C0A90BB",
    },
  ],
  "832": [
    {
      gaugeId: "29882",
      denom:
        "ibc/8E697BDABE97ACE8773C6DF7402B2D1D5104DD1EEABE12608E3469B7F64C15BA",
    },
  ],
  "833": [
    {
      gaugeId: "30290",
      denom:
        "ibc/A8CA5EE328FA10C9519DF6057DA1F69682D28F7D0F5CCC7ECB72E3DCA2D157A4",
    },
  ],
  "837": [
    {
      gaugeId: "29948",
      denom:
        "ibc/2DA9C149E9AD2BD27FEFA635458FB37093C256C1A940392634A16BEA45262604",
    },
  ],
  "856": [
    {
      gaugeId: "30210",
      denom:
        "ibc/C822645522FC3EECF817609AA38C24B64D04F5C267A23BCCF8F2E3BC5755FA88",
    },
    {
      gaugeId: "30246",
      denom:
        "ibc/C822645522FC3EECF817609AA38C24B64D04F5C267A23BCCF8F2E3BC5755FA88",
    },
    {
      gaugeId: "30247",
      denom:
        "ibc/C822645522FC3EECF817609AA38C24B64D04F5C267A23BCCF8F2E3BC5755FA88",
    },
  ],
  "858": [
    {
      gaugeId: "30150",
      denom:
        "ibc/BB936517F7E5D77A63E0ADB05217A6608B0C4CF8FBA7EA2F4BAE4107A7238F06",
    },
    {
      gaugeId: "30151",
      denom:
        "ibc/BB936517F7E5D77A63E0ADB05217A6608B0C4CF8FBA7EA2F4BAE4107A7238F06",
    },
    {
      gaugeId: "30152",
      denom:
        "ibc/BB936517F7E5D77A63E0ADB05217A6608B0C4CF8FBA7EA2F4BAE4107A7238F06",
    },
  ],
};

/** Gauges to be rendered in pool's respective pool detail page. */
export const ExternalIncentiveGaugeAllowList: {
  [poolId: string]: {
    gaugeId: string;
    denom: string;
  }[];
} = IS_TESTNET
  ? TestnetExternalIncentiveGaugeAllowList
  : MainnetExternalIncentiveGaugeAllowList;
