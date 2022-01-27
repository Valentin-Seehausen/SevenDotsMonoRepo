<template>
  <div class="flex flex-col items-center">
    <div class="w-140">
      <h3 class="text-lg bold">
        Seven Dots
      </h3>
      <p class="my-4">
        Where does DeFi end and NFT begin? At Seven Dots the community creates NFTs from attributes. The release plan of the attributes follows a complete deterministic path, but the combination and the final NFTs will totally depend on your choice. Fot this work, the community will get 80% of all profits.
      </p>

      <p class="my-4">
        If you are interested, here is a 5 minute introduction. The project is not very complex, as this is just a christmas-holidy-idea and a proof-of-concept that took way longer than expected.
      </p>

      <h3 class="text-lg bold">
        Stack Art
      </h3>
      <p class="my-4">
        So here we go, this is a token with a dot, with the color 1 on field 1. We write this as: <strong>dna: c1f1</strong>.
      </p>

      <img class="w-56 my-4" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZlcnNpb249JzEuMScgd2lkdGg9JzI0JyBoZWlnaHQ9JzI0JyB2aWV3Ym94PScwIDAgMjQgMjQnPjxzdHlsZT4jYmcge2ZpbGw6ICMwMDB9LmMxIHtmaWxsOiAjRkYwMDAwfS5jMiB7ZmlsbDogI0ZGQjMwMH0uYzMge2ZpbGw6ICNEREZGMDB9LmM0IHtmaWxsOiAjMDBGRjVFfS5jNSB7ZmlsbDogIzAwOTFGRn0uYzYge2ZpbGw6ICM0ODAwRkZ9LmM3IHtmaWxsOiAjRkYwMEQ5fTwvc3R5bGU+PHJlY3QgaWQ9J2JnJyB4PScwJyB5PScwJyB3aWR0aD0nMjQnIGhlaWdodD0nMjQnLz48cmVjdCBjbGFzcz0nYzEnIHg9JzInIHk9JzExJyB3aWR0aD0nMicgaGVpZ2h0PScyJy8+PC9zdmc+">
      <p class="my-4">
        Here comes a next dot, this time with <strong>dna: c1f2</strong> (so same field, but new color):
      </p>
      <img class="w-56 my-4" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZlcnNpb249JzEuMScgd2lkdGg9JzI0JyBoZWlnaHQ9JzI0JyB2aWV3Ym94PScwIDAgMjQgMjQnPjxzdHlsZT4jYmcge2ZpbGw6ICMwMDB9LmMxIHtmaWxsOiAjRkYwMDAwfS5jMiB7ZmlsbDogI0ZGQjMwMH0uYzMge2ZpbGw6ICNEREZGMDB9LmM0IHtmaWxsOiAjMDBGRjVFfS5jNSB7ZmlsbDogIzAwOTFGRn0uYzYge2ZpbGw6ICM0ODAwRkZ9LmM3IHtmaWxsOiAjRkYwMEQ5fTwvc3R5bGU+PHJlY3QgaWQ9J2JnJyB4PScwJyB5PScwJyB3aWR0aD0nMjQnIGhlaWdodD0nMjQnLz48cmVjdCBjbGFzcz0nYzInIHg9JzInIHk9JzExJyB3aWR0aD0nMicgaGVpZ2h0PScyJy8+PC9zdmc+">
      <p class="my-4">
        And here is the trick: These dots are the attributes of an NFT. They can be combined to create more complex and more beautiful NFTs. We combine attributes, by <strong>stacking token</strong> together:
      </p>
      <img class="w-56 my-4" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZlcnNpb249JzEuMScgd2lkdGg9JzI0JyBoZWlnaHQ9JzI0JyB2aWV3Ym94PScwIDAgMjQgMjQnPjxzdHlsZT4jYmcge2ZpbGw6ICMwMDB9LmMxIHtmaWxsOiAjRkYwMDAwfS5jMiB7ZmlsbDogI0ZGQjMwMH0uYzMge2ZpbGw6ICNEREZGMDB9LmM0IHtmaWxsOiAjMDBGRjVFfS5jNSB7ZmlsbDogIzAwOTFGRn0uYzYge2ZpbGw6ICM0ODAwRkZ9LmM3IHtmaWxsOiAjRkYwMEQ5fTwvc3R5bGU+PHJlY3QgaWQ9J2JnJyB4PScwJyB5PScwJyB3aWR0aD0nMjQnIGhlaWdodD0nMjQnLz48cmVjdCBjbGFzcz0nYzInIHg9JzInIHk9JzknIHdpZHRoPScyJyBoZWlnaHQ9JzInLz48cmVjdCBjbGFzcz0nYzEnIHg9JzInIHk9JzEyJyB3aWR0aD0nMicgaGVpZ2h0PScyJy8+PC9zdmc+">
      <p class="my-4">
        Funny right? This works in both direction and takes 2 hours waiting time.
      </p>
      <p class="my-4">
        There are 7 fields and 7 colors. The rarity of the attributes is completely deterministic. A continuous mint id determines which dot is minted on wich field. First mint will be f1c1 (rare), next two mints will be f1c2, next three mints will be f1c3 etc, until seven mints are f1c7 (not rare). This will be 28 mints for field 1, and for 7 fields, this makes 196 mints. To make it more interesting, the rarest color on field 2 is color 2. And the most common color on field 2 is color 1. The rarity is shifted for each field.
      </p>

      <p class="my-4">
        To illustrate is easy, here is a token with the rare colors for each field (<strong>dna: f1c1f2c2f3c3f4c4f5c5f6c6f7c7</strong>). Each single field-color combination has a rarity of 3.57% (1 / 28), the whole token has a rarity of 0.51% (1 / 196):
      </p>
      <img class="w-56 my-4" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZlcnNpb249JzEuMScgd2lkdGg9JzI0JyBoZWlnaHQ9JzI0JyB2aWV3Ym94PScwIDAgMjQgMjQnPjxzdHlsZT4jYmcge2ZpbGw6ICMwMDB9LmMxIHtmaWxsOiAjRkYwMDAwfS5jMiB7ZmlsbDogI0ZGQjMwMH0uYzMge2ZpbGw6ICNEREZGMDB9LmM0IHtmaWxsOiAjMDBGRjVFfS5jNSB7ZmlsbDogIzAwOTFGRn0uYzYge2ZpbGw6ICM0ODAwRkZ9LmM3IHtmaWxsOiAjRkYwMEQ5fTwvc3R5bGU+PHJlY3QgaWQ9J2JnJyB4PScwJyB5PScwJyB3aWR0aD0nMjQnIGhlaWdodD0nMjQnLz48cmVjdCBjbGFzcz0nYzEnIHg9JzInIHk9JzExJyB3aWR0aD0nMicgaGVpZ2h0PScyJy8+PHJlY3QgY2xhc3M9J2MyJyB4PSc1JyB5PScxMScgd2lkdGg9JzInIGhlaWdodD0nMicvPjxyZWN0IGNsYXNzPSdjMycgeD0nOCcgeT0nMTEnIHdpZHRoPScyJyBoZWlnaHQ9JzInLz48cmVjdCBjbGFzcz0nYzQnIHg9JzExJyB5PScxMScgd2lkdGg9JzInIGhlaWdodD0nMicvPjxyZWN0IGNsYXNzPSdjNScgeD0nMTQnIHk9JzExJyB3aWR0aD0nMicgaGVpZ2h0PScyJy8+PHJlY3QgY2xhc3M9J2M2JyB4PScxNycgeT0nMTEnIHdpZHRoPScyJyBoZWlnaHQ9JzInLz48cmVjdCBjbGFzcz0nYzcnIHg9JzIwJyB5PScxMScgd2lkdGg9JzInIGhlaWdodD0nMicvPjwvc3ZnPg==">
      <p class="my-4">
        And the following token showcases all non-rare colors on the field (<strong>dna: f1c7f2c6f3c5f4c4f5c3f6c2f7c1</strong>). Each single field-color combination has a rarity of 25% (7 / 28), the whole token has a rarity of 3.57% (7 / 196):
      </p>
      <img class="w-56 my-4" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZlcnNpb249JzEuMScgd2lkdGg9JzI0JyBoZWlnaHQ9JzI0JyB2aWV3Ym94PScwIDAgMjQgMjQnPjxzdHlsZT4jYmcge2ZpbGw6ICMwMDB9LmMxIHtmaWxsOiAjRkYwMDAwfS5jMiB7ZmlsbDogI0ZGQjMwMH0uYzMge2ZpbGw6ICNEREZGMDB9LmM0IHtmaWxsOiAjMDBGRjVFfS5jNSB7ZmlsbDogIzAwOTFGRn0uYzYge2ZpbGw6ICM0ODAwRkZ9LmM3IHtmaWxsOiAjRkYwMEQ5fTwvc3R5bGU+PHJlY3QgaWQ9J2JnJyB4PScwJyB5PScwJyB3aWR0aD0nMjQnIGhlaWdodD0nMjQnLz48cmVjdCBjbGFzcz0nYzcnIHg9JzInIHk9JzExJyB3aWR0aD0nMicgaGVpZ2h0PScyJy8+PHJlY3QgY2xhc3M9J2M2JyB4PSc1JyB5PScxMScgd2lkdGg9JzInIGhlaWdodD0nMicvPjxyZWN0IGNsYXNzPSdjNScgeD0nOCcgeT0nMTEnIHdpZHRoPScyJyBoZWlnaHQ9JzInLz48cmVjdCBjbGFzcz0nYzQnIHg9JzExJyB5PScxMScgd2lkdGg9JzInIGhlaWdodD0nMicvPjxyZWN0IGNsYXNzPSdjMycgeD0nMTQnIHk9JzExJyB3aWR0aD0nMicgaGVpZ2h0PScyJy8+PHJlY3QgY2xhc3M9J2MyJyB4PScxNycgeT0nMTEnIHdpZHRoPScyJyBoZWlnaHQ9JzInLz48cmVjdCBjbGFzcz0nYzEnIHg9JzIwJyB5PScxMScgd2lkdGg9JzInIGhlaWdodD0nMicvPjwvc3ZnPg==">
      <p class="my-4">
        The production of NFTs by the community solves a problem of minting final NFTs. Often bots and frontrunners can scan the project, calculate the rare attributes of NFTs and mint only these by skyrocketing the gas costs. Seven Dots gives the creation of NFTs in the hand of the community in a transparent way.
      </p>

      <h3 class="text-lg bold">
        Sale Process
      </h3>

      <p class="my-4">
        Another problem of NFT projects is the sale process. Mostly insiders and bots can enjoy minting and early access. Mints happen in a few hours and marketing has to be strong. Seven Dots does not have a huge community, so innovation had to help. The sale process of Seven Dot optimizes the incentives for early users, while still being very lucrative to join later.
      </p>
      <p class="my-4">
        There will be 77,777 dots minted. Every dot will be sold in an auction, so 77,777 auctions will be created. A maximum of 196 auctions can be open at the same time (start price 0.001 wETH). Each auction is open for 1 day. When the sale runs on full capacity, the runway is slightly longer than a year. Most probably it will take some more time.
      </p>
      <p class="my-4">
        With this process the community of Seven Dots can maximize the income, as this process will make sure the real market value of Seven Dots will be collected through the auctions of the NFTs.
      </p>
      <p class="my-4">
        With this process the community of Seven Dots can maximize the income, as this process will make sure the real market value of Seven Dots will be collected through the auctions of the NFTs.
      </p>

      <h3 class="text-lg bold">
        Tokenomics
      </h3>
      <p class="my-4">
        All profits of the auctions will go to the artist (20%) and the community (80%). The amount gets transfered to the <strong>treasury</strong>. Community members own a portion of the treasury dependend on the amount of <strong>7DOTS ERC20 token</strong> they own. 7DOTS can be earned by: creating an auction (0.1 7DOTS) and by stacking two token (7 7DOTS).
      </p>
      <p class="my-4">
        7DOTS token can be staked. Each stack will trigger the staking reward and inrease the staking faktor. The staking faktor starts at 1.0 and after 77,777 stacks it will reach 7.0. This means, that early users will be able to get seven times more of the treasury for stacking tokens. Most probably they will also be able to buy dots for very low prices.
      </p>
      <p class="my-4">
        Users can withdraw their share of the treasury at all times, but it is a one-way street. 7DOTS token can only by earned by stacking token (and thus creating the artwork of Seven Dots).
      </p>
      <p class="my-4">
        When a Seven Dot NFT gets sold on OpenSea, 80% of the bounty will be transfered to the treasury, so users have to make a decision of when they want to pull out.
      </p>

      <h3 class="text-lg bold">
        Uniqueness
      </h3>
      <p class="my-4">
        There are only seven colors and seven fields, so what will make the artwork interesting? Then NFT reaches 49 dots, it reaches uniqueness. It will not be possible to stack tokens to reach this special combination anymore. A total of 77,777 dots will make an absolute maximum of 1,587 unique NFTs. As this would mean all dots are stacked without losses, it is more likely that the actual number of unique NFTs will be lower.
      </p>

      <h3 class="text-lg bold">
        Technology
      </h3>
      <p class="my-4">
        All data is created on chain. The dna is minimized into a byte32 and saved for every token. The tokenURI gets calculated from this seed. This minimizes storage and maximizes information. The SVG is created on-chain and returned as a base64 encoded image.
      </p>
      <img src="/images/tokenURI.png">
    </div>
  </div>
</template>
