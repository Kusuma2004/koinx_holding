import React, { useState, useEffect } from 'react';
import { Sparkles } from 'lucide-react';
import {
  Box,
  Paper,
  Typography,
  Checkbox,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from '@mui/material';

const holdingsData = [
  {
    "coin": "USDC",
    "coinName": "USDC",
    "logo": "https://coin-images.coingecko.com/coins/images/6319/large/usdc.png?1696506694",
    "currentPrice": 85.41,
    "totalHolding": 0.0015339999999994802,
    "averageBuyPrice": 1.5863185433764244,
    "stcg": {
      "balance": 0.0015339999999994802,
      "gain": 0.12858552735441697
    },
    "ltcg": {
      "balance": 0,
      "gain": 0
    }
  },
  {
    "coin": "WETH",
    "coinName": "Polygon PoS Bridged WETH (Polygon POS)",
    "logo": "https://coin-images.coingecko.com/coins/images/2518/large/weth.png?1696503332",
    "currentPrice": 211756,
    "totalHolding": 0.00023999998390319965,
    "averageBuyPrice": 3599.856066001555,
    "stcg": {
      "balance": 0.00023999998390319965,
      "gain": 49.957471193511736
    },
    "ltcg": {
      "balance": 0,
      "gain": 0
    }
  },
  {
    "coin": "SOL",
    "coinName": "SOL (Wormhole)",
    "logo": "https://coin-images.coingecko.com/coins/images/22876/large/SOL_wh_small.png?1696522175",
    "currentPrice": 14758.01,
    "totalHolding": 3.469446951953614e-17,
    "averageBuyPrice": 221.42847548590152,
    "stcg": {
      "balance": 3.469446951953614e-17,
      "gain": 5.043389846205066e-13
    },
    "ltcg": {
      "balance": 0,
      "gain": 0
    }
  },
  {
    "coin": "WPOL",
    "coinName": "Wrapped POL",
    "logo": "https://koinx-statics.s3.ap-south-1.amazonaws.com/currencies/DefaultCoin.svg",
    "currentPrice": 22.08,
    "totalHolding": 2.3172764293128694,
    "averageBuyPrice": 0.5227311370876341,
    "stcg": {
      "balance": 1.3172764293128694,
      "gain": 49.954151016387065
    },
    "ltcg": {
      "balance": 1,
      "gain": 20
    }
  },
  {
    "coin": "MATIC",
    "coinName": "Polygon",
    "logo": "https://coin-images.coingecko.com/coins/images/4713/large/polygon.png?1698233745",
    "currentPrice": 22.22,
    "totalHolding": 2.75145540184285,
    "averageBuyPrice": 0.6880274617804887,
    "stcg": {
      "balance": 2.75145540184285,
      "gain": 59.244262152615974
    },
    "ltcg": {
      "balance": 0,
      "gain": 0
    }
  },
  {
    "coin": "GONE",
    "coinName": "Gone",
    "logo": "https://koinx-statics.s3.ap-south-1.amazonaws.com/currencies/DefaultCoin.svg",
    "currentPrice": 0.0001462,
    "totalHolding": 696324.3075326696,
    "averageBuyPrice": 0.00001637624055112482,
    "stcg": {
      "balance": 696324.3075326696,
      "gain": 90.39943939952589
    },
    "ltcg": {
      "balance": 0,
      "gain": 0
    }
  },
  {
    "coin": "USDT",
    "coinName": "Arbitrum Bridged USDT (Arbitrum)",
    "logo": "https://coin-images.coingecko.com/coins/images/325/large/Tether.png?1696501661",
    "currentPrice": 85.42,
    "totalHolding": 0.0001580000000558357,
    "averageBuyPrice": 1.4988059369185402,
    "stcg": {
      "balance": 0.0001580000000558357,
      "gain": 0.01325954866665267
    },
    "ltcg": {
      "balance": 0,
      "gain": 0
    }
  },
  {
    "coin": "USDC",
    "coinName": "Bridged USDC (Polygon PoS Bridge)",
    "logo": "https://coin-images.coingecko.com/coins/images/33000/large/usdc.png?1700119918",
    "currentPrice": 85.41,
    "totalHolding": 0.005806999999992795,
    "averageBuyPrice": 1.5405071277176852,
    "stcg": {
      "balance": 0.005806999999992795,
      "gain": 0.48703014510873915
    },
    "ltcg": {
      "balance": 0,
      "gain": 0
    }
  },
  {
    "coin": "SLN",
    "coinName": "Smart Layer Network",
    "logo": "https://koinx-statics.s3.ap-south-1.amazonaws.com/currencies/DefaultCoin.svg",
    "currentPrice": 6.66,
    "totalHolding": 0.01,
    "averageBuyPrice": 4.999247835735738,
    "stcg": {
      "balance": 0.01,
      "gain": 0.016607521642642627
    },
    "ltcg": {
      "balance": 0,
      "gain": 0
    }
  },
  {
    "coin": "OX",
    "coinName": "OX Coin",
    "logo": "https://coin-images.coingecko.com/coins/images/35365/large/logo.png?1708395976",
    "currentPrice": 0.13319,
    "totalHolding": 5,
    "averageBuyPrice": 0.018408606024462898,
    "stcg": {
      "balance": 5,
      "gain": 0.5739069698776855
    },
    "ltcg": {
      "balance": 0,
      "gain": 0
    }
  },
  {
    "coin": "FLAME",
    "coinName": "FireStarter",
    "logo": "https://coin-images.coingecko.com/coins/images/17359/large/WhiteOnBlack_Primary_Logo.png?1696516910",
    "currentPrice": 0.355985,
    "totalHolding": 1.4210854715202004e-14,
    "averageBuyPrice": 0.07889041030290807,
    "stcg": {
      "balance": 1.4210854715202004e-14,
      "gain": 3.9377509565538836e-15
    },
    "ltcg": {
      "balance": 0,
      "gain": 0
    }
  },
  {
    "coin": "PIG",
    "coinName": "Pigcoin",
    "logo": "https://coin-images.coingecko.com/coins/images/35425/large/pigcoin_200.png?1708544734",
    "currentPrice": 0.00008706,
    "totalHolding": 1.79,
    "averageBuyPrice": 0,
    "stcg": {
      "balance": 1.79,
      "gain": 0.0001558374
    },
    "ltcg": {
      "balance": 0,
      "gain": 0
    }
  },
  {
    "coin": "$CULO",
    "coinName": "CULO",
    "logo": "https://coin-images.coingecko.com/coins/images/34662/large/CULO-logo-inverted_200.png?1705641744",
    "currentPrice": 0.00001623,
    "totalHolding": 150000,
    "averageBuyPrice": 0,
    "stcg": {
      "balance": 150000,
      "gain": 2.4345
    },
    "ltcg": {
      "balance": 0,
      "gain": 0
    }
  },
  {
    "coin": "ETH",
    "coinName": "Ethereum",
    "logo": "https://coin-images.coingecko.com/coins/images/279/large/ethereum.png?1696501628",
    "currentPrice": 216182,
    "totalHolding": 0.0004211938732637162,
    "averageBuyPrice": 3909.792264648455,
    "stcg": {
      "balance": 0.0004211938732637162,
      "gain": 89.40775336229291
    },
    "ltcg": {
      "balance": 0,
      "gain": 0
    }
  },
  {
    "coin": "QUICK",
    "coinName": "Quickswap [OLD]",
    "logo": "https://coin-images.coingecko.com/coins/images/13970/large/quick.png?1696513704",
    "currentPrice": 2319.83,
    "totalHolding": 5.961538207532868e-11,
    "averageBuyPrice": 65.86759737193783,
    "stcg": {
      "balance": 5.961538207532868e-11,
      "gain": 1.3437082981609774e-7
    },
    "ltcg": {
      "balance": 0,
      "gain": 0
    }
  },
  {
    "coin": "DFYN",
    "coinName": "Dfyn Network",
    "logo": "https://coin-images.coingecko.com/coins/images/15368/large/SgqhfWz4_400x400_%281%29.jpg?1696515016",
    "currentPrice": 0.300613,
    "totalHolding": 3.1178615245153196e-11,
    "averageBuyPrice": 0.03486178524947315,
    "stcg": {
      "balance": 3.1178615245153196e-11,
      "gain": 8.285754875638759e-12
    },
    "ltcg": {
      "balance": 0,
      "gain": 0
    }
  },
  {
    "coin": "LINK",
    "coinName": "Chainlink",
    "logo": "https://coin-images.coingecko.com/coins/images/877/large/chainlink-new-logo.png?1696502009",
    "currentPrice": 1450.14,
    "totalHolding": 0.000047233224826389,
    "averageBuyPrice": 9.172984515948809,
    "stcg": {
      "balance": 0.000047233224826389,
      "gain": 0.06806151900976895
    },
    "ltcg": {
      "balance": 0,
      "gain": 0
    }
  },
  {
    "coin": "BLOK",
    "coinName": "Bloktopia",
    "logo": "https://coin-images.coingecko.com/coins/images/18819/large/logo-bholdus-6.png?1696518281",
    "currentPrice": 0.02974533,
    "totalHolding": 9.822542779147625e-11,
    "averageBuyPrice": 0.005182145656093,
    "stcg": {
      "balance": 9.822542779147625e-11,
      "gain": 2.412729290101157e-12
    },
    "ltcg": {
      "balance": 0,
      "gain": 0
    }
  },
  {
    "coin": "SPHERE",
    "coinName": "Sphere Finance",
    "logo": "https://coin-images.coingecko.com/coins/images/24424/large/2iR2JsL.png?1696523606",
    "currentPrice": 0.00729945,
    "totalHolding": 2.2737367544323206e-13,
    "averageBuyPrice": 0.011065778585432803,
    "stcg": {
      "balance": 2.2737367544323206e-13,
      "gain": -8.563639733967655e-16
    },
    "ltcg": {
      "balance": 0,
      "gain": 0
    }
  },
  {
    "coin": "TRADE",
    "coinName": "Polytrade",
    "logo": "https://coin-images.coingecko.com/coins/images/16416/large/Logo_colored_200.png?1696516012",
    "currentPrice": 17.51,
    "totalHolding": 3.325212327709437e-11,
    "averageBuyPrice": 0.25960465528043797,
    "stcg": {
      "balance": 3.325212327709437e-11,
      "gain": 5.736122725812298e-10
    },
    "ltcg": {
      "balance": 0,
      "gain": 0
    }
  },
  {
    "coin": "WELT",
    "coinName": "Fabwelt",
    "logo": "https://coin-images.coingecko.com/coins/images/20505/large/welt.PNG?1696519911",
    "currentPrice": 0.060863,
    "totalHolding": 1.063542780948968,
    "averageBuyPrice": 0.01520546569793174,
    "stcg": {
      "balance": 1.063542780948968,
      "gain": 0.048558741002894576
    },
    "ltcg": {
      "balance": 0,
      "gain": 0
    }
  },
  {
    "coin": "FTM",
    "coinName": "Fantom",
    "logo": "https://koinx-statics.s3.ap-south-1.amazonaws.com/currencies/DefaultCoin.svg",
    "currentPrice": 52.99,
    "totalHolding": 0.04265758808550148,
    "averageBuyPrice": 1.7040326829291739,
    "stcg": {
      "balance": 0.04265758808550148,
      "gain": 2.1877356683780986
    },
    "ltcg": {
      "balance": 0,
      "gain": 0
    }
  },
  {
    "coin": "EZ",
    "coinName": "EasyFi V2",
    "logo": "https://koinx-statics.s3.ap-south-1.amazonaws.com/currencies/DefaultCoin.svg",
    "currentPrice": 0.885074,
    "totalHolding": 0.0005424384664524931,
    "averageBuyPrice": 6.539367177529248,
    "stcg": {
      "balance": 0.0005424384664524931,
      "gain": -0.0030671061200917595
    },
    "ltcg": {
      "balance": 0,
      "gain": 0
    }
  },
  {
    "coin": "FRM",
    "coinName": "Ferrum Network",
    "logo": "https://coin-images.coingecko.com/coins/images/8251/large/FRM.png?1696508455",
    "currentPrice": 0.093794,
    "totalHolding": 6.442993445432421e-7,
    "averageBuyPrice": 0.453964789704584,
    "stcg": {
      "balance": 6.442993445432421e-7,
      "gain": -2.3205780373028534e-7
    },
    "ltcg": {
      "balance": 0,
      "gain": 0
    }
  },
  {
    "coin": "TITAN",
    "coinName": "IRON Titanium",
    "logo": "https://koinx-statics.s3.ap-south-1.amazonaws.com/currencies/DefaultCoin.svg",
    "currentPrice": 8.65643e-7,
    "totalHolding": 8.861,
    "averageBuyPrice": 8.531798889329416e-7,
    "stcg": {
      "balance": 8.861,
      "gain": 1.1043562716520403e-7
    },
    "ltcg": {
      "balance": 0,
      "gain": 0
    }
  }
]


const calculateNetGains = (gains) => {
  const stcgNet = gains.stcg.profits - gains.stcg.losses;
  const ltcgNet = gains.ltcg.profits - gains.ltcg.losses;
  const realised = stcgNet + ltcgNet;
  return { stcgNet, ltcgNet, realised };
};

const calculateOpportunityScore = (h) => {
  const st = h.stcg.gain < 0 ? Math.abs(h.stcg.gain) : 0;
  const lt = h.ltcg.gain < 0 ? Math.abs(h.ltcg.gain) : 0;
  return st + lt;
};

const Dashboard = () => {
  const [selected, setSelected] = useState([]);
  const [preHarvest, setPreHarvest] = useState({});
  const [postHarvest, setPostHarvest] = useState({});

  const holdingsWithScore = holdingsData.map(h => ({ ...h, opportunityScore: calculateOpportunityScore(h) }));
  const sortedHoldings = [...holdingsWithScore].sort((a, b) => b.opportunityScore - a.opportunityScore);
  const topOpportunity = sortedHoldings[0]?.coin;

  useEffect(() => {
    const stcgProfits = holdingsData.reduce((sum, h) => sum + (h.stcg.gain > 0 ? h.stcg.gain : 0), 0);
    const stcgLosses = holdingsData.reduce((sum, h) => sum + (h.stcg.gain < 0 ? -h.stcg.gain : 0), 0);
    const ltcgProfits = holdingsData.reduce((sum, h) => sum + (h.ltcg.gain > 0 ? h.ltcg.gain : 0), 0);
    const ltcgLosses = holdingsData.reduce((sum, h) => sum + (h.ltcg.gain < 0 ? -h.ltcg.gain : 0), 0);

    const initial = calculateNetGains({
      stcg: { profits: stcgProfits, losses: stcgLosses },
      ltcg: { profits: ltcgProfits, losses: ltcgLosses },
    });

    setPreHarvest(initial);
    setPostHarvest(initial);
  }, []);

  const toggleSelect = (coin) => {
    const updated = selected.includes(coin)
      ? selected.filter((c) => c !== coin)
      : [...selected, coin];
    setSelected(updated);

    const selectedHoldings = holdingsData.filter((h) => updated.includes(h.coin));
    const stcgProfits = selectedHoldings.reduce((sum, h) => sum + (h.stcg.gain > 0 ? h.stcg.gain : 0), 0);
    const stcgLosses = selectedHoldings.reduce((sum, h) => sum + (h.stcg.gain < 0 ? -h.stcg.gain : 0), 0);
    const ltcgProfits = selectedHoldings.reduce((sum, h) => sum + (h.ltcg.gain > 0 ? h.ltcg.gain : 0), 0);
    const ltcgLosses = selectedHoldings.reduce((sum, h) => sum + (h.ltcg.gain < 0 ? -h.ltcg.gain : 0), 0);

    const updatedPost = calculateNetGains({
      stcg: { profits: stcgProfits, losses: stcgLosses },
      ltcg: { profits: ltcgProfits, losses: ltcgLosses },
    });

    setPostHarvest(updatedPost);
  };

  return (
    <Box
      sx={{
        bgcolor: 'background.default',
        minHeight: '100vh',
        p: 4,
        background: 'linear-gradient(135deg, #1f2937 0%, #111827 100%)',
        color: 'white',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 1,
          mb: 4,
          color: 'warning.main',
          fontWeight: 'bold',
          fontSize: '1.25rem',
        }}
      >
        <Sparkles size={28} />
        AI Insights: Strategically harvesting losses can reduce your tax bill. Choose wisely.
      </Box>

      <Box sx={{ display: 'flex', gap: 3, mb: 6 }}>
        <Paper sx={{ flex: 1, p: 3, bgcolor: 'grey.800' }} elevation={8}>
          <Typography variant="h6" gutterBottom>
            Pre-Harvesting
          </Typography>
          <Typography>Short-term: ₹{preHarvest.stcgNet}</Typography>
          <Typography>Long-term: ₹{preHarvest.ltcgNet}</Typography>
          <Typography sx={{ fontWeight: 'bold'}}>Realised Capital Gains: ₹{preHarvest.realised}</Typography>
        </Paper>

        <Paper sx={{ flex: 1, p: 3, bgcolor: 'primary.dark', color: 'primary.contrastText' }} elevation={8}>
          <Typography variant="h6" gutterBottom>
            After-Harvesting
          </Typography>
          <Typography>Short-term: ₹{postHarvest.stcgNet}</Typography>
          <Typography>Long-term: ₹{postHarvest.ltcgNet}</Typography>
          <Typography sx={{ fontWeight: 'bold'}}>Effective Capital Gains: ₹{postHarvest.realised}</Typography>
          {preHarvest.realised > postHarvest.realised && (
            <Box
              sx={{
                mt: 2,
                color: 'black',
                p: 1,
                borderRadius: 1,
                fontWeight: 'bold',
                textAlign: 'center',
              }}
            >
              You Saved up to: ₹{preHarvest.realised - postHarvest.realised}
            </Box>
          )}
        </Paper>
      </Box>



      <TableContainer component={Paper} sx={{ bgcolor: 'grey.900' }}>
        <Table size="small">
          <TableHead>
            <TableRow sx={{ bgcolor: 'grey.800' }}>
              <TableCell>Select</TableCell>
              <TableCell>Asset</TableCell>
              <TableCell>Holdings</TableCell>
              <TableCell>Avg Buy Price</TableCell>
              <TableCell>Current Price</TableCell>
              <TableCell>ST Gain</TableCell>
              <TableCell>LT Gain</TableCell>
              <TableCell>Opportunity Score</TableCell>
            </TableRow>
          </TableHead>
         <TableBody>
  {sortedHoldings.map((h) => {
    const isTop = h.coin === topOpportunity;

    // Format numbers as USD currency
    const formatUSD = (value) =>
      new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value);

    return (
      <TableRow
        key={h.coin}
        sx={{
          borderLeft: isTop ? 4 : 0,
          borderColor: isTop ? 'warning.main' : 'transparent',
          '&:hover': { bgcolor: 'grey.800' },
          color: '#ffffff',
        }}
      >
        <TableCell>
          <Checkbox
            checked={selected.includes(h.coin)}
            onChange={() => toggleSelect(h.coin)}
            sx={{ color: 'warning.main' }}
          />
        </TableCell>

       <TableCell
  sx={{
    display: 'flex',
    alignItems: 'center',
    gap: 1.5,
    color: '#ffffff',
    paddingY: 1,        // vertical padding for better spacing
  }}
>
  <img
    src={h.logo}
    alt={h.coin}
    width={24}
    height={24}
    style={{ display: 'block' }}  // remove any inline-block gap issues
  />
  <Typography
    variant="body1"
    sx={{
      fontWeight: 'medium',
      lineHeight: 4,
      whiteSpace: 'nowrap',  // prevent line break
      userSelect: 'none',
    }}
  >
    {h.coinName}
  </Typography>
</TableCell>


        <TableCell sx={{ color: '#ffffff' }}>
          {h.totalHolding.toFixed(4)} {h.coin}
        </TableCell>

        <TableCell sx={{ color: '#ffffff' }}>{formatUSD(h.averageBuyPrice)}</TableCell>
        <TableCell sx={{ color: '#ffffff' }}>{formatUSD(h.currentPrice)}</TableCell>

        <TableCell
          sx={{
            color: h.stcg.gain >= 0 ? 'success.light' : 'error.light',
          }}
        >
          {formatUSD(h.stcg.gain)}
        </TableCell>

        <TableCell
          sx={{
            color: h.ltcg.gain >= 0 ? 'success.light' : 'error.light',
          }}
        >
          {formatUSD(h.ltcg.gain)}
        </TableCell>

        <TableCell sx={{ fontWeight: 'bold', color: 'warning.main' }}>
          {formatUSD(h.opportunityScore)}
        </TableCell>
      </TableRow>
    );
  })}
</TableBody>

        </Table>
      </TableContainer>
    </Box>
  );
};

export default Dashboard;
