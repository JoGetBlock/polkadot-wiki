module.exports = {
  docs: [
    {
      type: "category",
      label: "General",
      items: [
        "general/getting-started",
        "general/research",
        "general/wallets",
        "general/ledger",
        {
          type: "category",
          label: "Community & Contributors",
          items: [
            "general/community",
            "general/contributing",
            "general/contributors",
          ],
        },
        {
          type: "category",
          label: "Programmes",
          items: [
            "general/grants",
            "maintain/maintain-bug-bounty",
            "general/ambassadors",
            "general/builders-program",
            "general/doc-thousand-validators",
            "general/doc-thousand-contributors",
          ],
        },
        {
          type: "category",
          label: "Stay Safe",
          items: [
            "general/scams",
            "general/how-to-dyor",
          ],
        },
        "general/faq",
        "general/glossary",
        "general/metadata",
      ],
    },
    {
      type: "category",
      label: "Learn",
      items: [
        {
          type: "category",
          label: "Basics",
          items: [
            {
              type: "category",
              label: "Accounts",
              items: [
                "learn/learn-accounts",
                "learn/learn-account-generation",
                "learn/learn-balance-transfers",
                "learn/learn-extrinsics",
                "learn/learn-account-multisig",
                'learn/learn-proxies',
              ],
            },
            {
              type: "category",
              label: "Tokens and Assets",
              items: [
                "learn/learn-assets",
                "learn/learn-DOT",
                "learn/learn-redenomination",
                "learn/learn-statemint",
                "learn/learn-teleport",
              ],
            },
            {
              type: "category",
              label: "NFTs",
              items: [
                "learn/learn-nft",
                "learn/learn-nft-pallets",
              ],
            },
            {
              type: "category",
              label: "Components",
              items: [
                "learn/learn-consensus",
                "learn/learn-governance",
                "learn/learn-opengov",
                "learn/learn-identity",
                "learn/learn-polkadot-host",
                "learn/learn-polkadotjs",
                "learn/learn-registrar",
                "learn/learn-runtime-upgrades",
                "learn/learn-transaction-fees",
                "learn/learn-treasury",
              ],
            },
            {
              type: "category",
              label: "Staking",
              items: [
                "learn/learn-staking",
                "learn/learn-nomination-pools",
                "learn/learn-staking-faq"
              ],
            },
          ],
        },
        {
          type: "category",
          label: "Advanced",
          items: [
            'learn/learn-account-advanced',
            "learn/learn-staking-advanced",
            "learn/learn-cryptography",
            'learn/learn-phragmen',
            'learn/learn-randomness',
            'learn/learn-spree',
            'learn/learn-staking-miner',
            'learn/learn-wasm',
          ],
        },
        {
          type: "category",
          label: "Architecture",
          items: [
            "learn/learn-architecture",
            "learn/learn-nominator",
            "learn/learn-validator",
            "learn/learn-collator",
            {
              type: "category",
              label: "Parachains",
              items: [
                "learn/learn-parachains",
                "learn/learn-parachains-protocol",
                'learn/learn-availability',
                "learn/learn-system-chains",
                "learn/learn-auction",
                "learn/learn-crowdloans",
                "learn/learn-parachains-faq",
              ],
            },
            "learn/learn-parathreads",
            "learn/learn-bridges",
            'learn/learn-xcm',
          ],
        },
        {
          type: "category",
          label: "Polkadot Comparisons",
          items: [
            'learn/learn-kusama-vs-polkadot',
            'learn/learn-comparisons',
            'learn/learn-comparisons-ethereum-2',
            'learn/learn-comparisons-cosmos',
            'learn/learn-comparisons-avalanche'
          ],
        },
        "learn/learn-launch",
        "learn/learn-video-tutorials",
      ],
    },
    {
      type: "category",
      label: "Build",
      items: [
        "build/build-index",
        {
          type: "category",
          label: "Development Guide",
          items: [
            "build/build-guide",
            "build/build-parachains",
            "build/build-storage",
            "build/build-smart-contracts",
            "build/build-oracle",
            "build/build-data",
            "build/build-substrate",
            "build/build-ss58-registry",
            "build/build-hrmp-channels",
          ],
        },
        {
          type: "category",
          label: "Integration Guide",
          items: [
            "build/build-integration",
            "build/build-protocol-info",
            "build/build-integrate-assets",
            "build/build-node-management",
            "build/build-node-interaction",
            "build/build-transaction-construction",
          ],
        },
        {
          type: "category",
          label: "Tools",
          items: ["build/build-tools-index", "build/build-open-source"],
        },
        {
          type: "category",
          label: "Resources",
          items: ["build/build-hackathon"],
        },
      ],
    },
    {
      type: "category",
      label: "Maintain",
      items: [
        "maintain/maintain-index",
        "maintain/maintain-polkadot-parameters",
        "maintain/maintain-endpoints",
        {
          type: "category",
          label: "Nodes and Dapps",
          items: [
            "maintain/maintain-sync",
            "maintain/maintain-networks",
            "maintain/maintain-wss",
            "maintain/maintain-errors",
          ],
        },
        "maintain/maintain-guides-how-to-nominate-polkadot",
        {
          type: "category",
          label: "Validator Guides",
          items: [
            "maintain/maintain-guides-how-to-validate-polkadot",
            "maintain/maintain-guides-validator-payout",
            "maintain/maintain-guides-how-to-systemd",
            "maintain/maintain-guides-secure-validator",
            "maintain/maintain-guides-how-to-upgrade",
            "maintain/maintain-guides-how-to-monitor-your-node",
            "maintain/maintain-guides-how-to-chill",
            "maintain/maintain-guides-how-to-stop-validating",
            "maintain/doc-maintain-guides-validator-community",
            "maintain/maintain-guides-avoid-slashing",
          ],
        },
        {
          type: "category",
          label: "Governance Guides",
          items: [
            "maintain/maintain-guides-democracy",
            "maintain/maintain-guides-opengov",
            "maintain/maintain-guides-how-to-join-council",
            "maintain/maintain-guides-how-to-vote-councillor",
          ],
        },
      ],
    },
  ],
};
