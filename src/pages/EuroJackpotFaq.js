import React from 'react';
import renderHTML from 'react-render-html';
import "./EuroJackpotFaq.css"


export default class EuroJackpotResults extends React.Component {

	render() {
	
		const txt = `
			<div class="ejp-faq">
				<h1>EuroJackpot Help & FAQ </h1>
					<h2 class="title3" id="lotto-eurojackpot-0">Europe‘s newest lottery </h2>
					<p>The decision to launch the latest pan-European lottery was made in Amsterdam, with nine national lottery companies cooperating from the outset (compared to just three for the EuroMillions in 2004!). Seven more joined until February 2013. The cooperating countries have pooled together for a maximum payout of 90 million Euros, and a respectable 10 million Euro minimum.<br/>
						<br/>The EuroJackpot is the first major competitor to the EuroMillions lottery, which was launched way back in 2004. EuroMillions is still significantly larger than the EuroJackpot, with its maximum prize of 190 million Euros. However, it is worth noting that the odds of winning the EuroJackpot are better than winning the <a href="/en/euromillions" class="ajaxNavi">EuroMillions</a>; EuroMillions odds are worse than the EuroJackpot (1 in 95 million for the EuroJackpot, versus 1 in 117 million).</p>
					<h2 class="title3" id="lotto-eurojackpot-1">When can I play the EuroJackpot? </h2>
					<p>The first EuroJackpot draw took place in March 2012. The <a href="/en/eurojackpot" class="ajaxNavi">EuroJackpot</a> draw is now a regular event, with draws scheduled for every Friday evening. You can play the EuroJackpot right here at Lottoland, and who knows, you might be the next EuroJackpot millionaire!</p>
					<h2 class="title3" id="lotto-eurojackpot-2">Which countries are participating in the EuroJackpot? </h2>
					<p>Croatia, Czech Republic, Denmark, Estonia, Finland, Germany, Hungary, Iceland, Italy, Latvia, Lithuania, the Netherlands, Norway, Slovakia, Slovenia, Spain, Sweden and Poland participate in the EuroJackpot Lottery.</p>
					<h2 class="title3" id="lotto-eurojackpot-3">What is the jackpot format? </h2>
					<p>The EuroJackpot is a 5 from 50 plus 2 out of 10 stars (supplementary numbers) format lottery. To win the jackpot, you need to match the 5+2 numbers drawn.</p>
					<h2 class="title3" id="lotto-eurojackpot-4">What are the prizes? </h2>
					<p>The organisers of the <a href="/en/eurojackpot" class="ajaxNavi">EuroJackpot</a> guarantee a minimum prize pool of 10 million Euros. The maximum jackpot is set to a massive 90 million Euros!<br/>
						<br/>The EuroJackpot is run cooperatively by nine different European countries, allowing the organisers to pool the prize pool and keep costs down. All of these factors combined allow for the high jackpots, and it is estimated that the jackpot will be won every three to four weeks.</p>
					<h2 class="title3" id="lotto-eurojackpot-5">What are the EuroJackpot prize tiers? </h2>
					<p>The <a href="/en/eurojackpot" class="ajaxNavi">EuroJackpot</a> is a 5+2 number format lottery. The more numbers you match with the drawn numbers, the higher the prize tier that you qualify for. You can win the jackpot, prize tier 1, by matching all of the draw numbers i.e. 5+2 numbers.<br/>
						<br/>The total lottery prize money is divided into 12 tiers. The split of prize money into these tiers is shown below:</p>
						<table><tbody><tr><th>Prize tier</th><th>Odds</th><th>Share of the total prize money</th></tr><tr><td>1(5+2)</td><td>1:95,344,200</td><td>36.00%</td></tr><tr class="even"><td>2(5+1)</td><td>1:5,959,013</td><td>8.50%</td></tr><tr><td>3(5+0)</td><td>1:3,405,150</td><td>3.00%</td></tr><tr class="even"><td>4(4+2)</td><td>1:423,752</td><td>1.00%</td></tr><tr><td>5(4+1)</td><td>1:26,485</td><td>0.90%</td></tr><tr class="even"><td>6(4+0)</td><td>1:15,134</td><td>0.70%</td></tr><tr><td>7(3+2)</td><td>1:9,631</td><td>0.60%</td></tr><tr class="even"><td>8(2+2)</td><td>1:672</td><td>3.10%</td></tr><tr><td>9(3+1)</td><td>1:602</td><td>3.00%</td></tr><tr class="even"><td>10(3+0)</td><td>1:344</td><td>4.30%</td></tr><tr><td>11(1+2)</td><td>1:128</td><td>7.80%</td></tr><tr class="even"><td>12(2+1)</td><td>1:42</td><td>19.10%</td></tr></tbody></table>
					<h2 class="title3" id="lotto-eurojackpot-6">How much does it cost to play the EuroJackpot? </h2>
					<p>One line (i.e. a completed box on the ticket) costs 2 Euros.</p>
					<h2 class="title3" id="lotto-eurojackpot-7">When is the EuroJackpot draw? </h2>
					<p>The draw for the <a href="/en/eurojackpot" class="ajaxNavi">EuroJackpot</a> Lottery takes place every Friday evening in Helsinki, Finland. As the interest in the lottery grows, it is possible that a second draw date will be added in the future.</p>
					<h2 class="title3" id="lotto-eurojackpot-8">What are the differences between the EuroJackpot and EuroMillions lotteries? </h2>
					<p>
						<a href="/en/eurojackpot" class="ajaxNavi">EuroJackpot</a> and EuroMillions are offered in different countries. Croatia, Czech Republic, Denmark, Germany, Estonia, Finland, Hungary, Iceland, Italy, Latvia, Lithuania, the Netherlands, Norway, Slovenia, Spain and Sweden are participating in the EuroJackpot lottery, although this list may expand in the future. These countries have a population of 265 million inhabitants, which is more than the EuroMillions which is today offered to over 200 million inhabitants, however this was not always the case. The EuroMillions was initially launched in just three countries:France, Britain, and Spain. Since then, residents from Austria, Belgium, Liechtenstein, Luxembourg, Portugal, Serbia and Switzerland have also joined the EuroMillions lottery pool.<br/>
						<br/>The EuroMillions and EuroJackpot are actually pretty similar in terms of format:for the EuroMillions, one must choose 5 numbers out of a range of 1 to 50 plus 2 supplementary (Star) numbers between 1 to 12, while the EuroJackpot only has a supplementary number range between 1 to 10. This seemingly tiny difference has a huge impact on the odds of winning however;
						the probabilty to win the EuroJackpot is approximately twice as high. The cost for a EuroJackpot ticket is 2 Euros , while the EuroMillions ticket costs 2.50 Euros. <br/>
						<br/>Odds and prizes:both the <a href="/en/euromillions" class="ajaxNavi">EuroMillions</a> and EuroJackpot offer multi-million Euro jackpots for those lucky enough to pick the right numbers. As with all lotteries, the more numbers drawn that match your ticket, the higher your profits. EuroMillions has a minimum jackpot size of 15 million Euros, while the fledgling EuroJackpot offers a still-respectable 10 million Euros starting prize. The EuroMillions really comes into its own with the maximum payout being a massive 190 million Euros while the EuroJackpot caps out at 90 million Euros. Here are the probabilities of winning compared:<br/> EuroJackpot:1 to 95,000,000 <br/> EuroMillions:1 to 117,000,000 <br/>
						<br/> The EuroJackpot and EuroMillions draws:the <a href="/en/euromillions" class="ajaxNavi">EuroMillions</a> lottery was launched in 2004 with one draw a week, and has since grown to two weekly draws on Tuesdays and Fridays in Paris. For now, the EuroJackpot has one weekly draw on Fridays, but this may be increased in the future.</p>
					<h2 class="title3" id="lotto-eurojackpot-9">Is the payout guaranteed? How do I know? </h2>
						<p>At Lottoland we can guarantee you will be paid out on your winnings - regardless of the jackpot amount. <br>
					
						<br> At Lottoland you bet on the outcome of the official draw. For all intents and purposes you will have the exact same customer experience as if you were playing the official lottery. The key difference is that we take your bet and we pay you if you win. We are able to achieve this in two ways. <br>
								<br> For smaller prize tier payments we make the payment directly from the fund we have from the total ticket sales. <br>
										<br> In order for us to make the larger prize tier payments we take out insurance policies to cover the eventuality of a Jackpot win or a substantial payout on the Lotto ticket. Part of the Lotto ticket price you pay goes towards the payment of this policy. <br>
												<br> We are registered with and regulated by the UK Gambling Commission, the Gibraltar Gambling Commission, and the Revenue Commissioners in Ireland. In order for us to retain these licences we have to prove that we are able to make the required payouts to our players should they win and that we have the correct procedures in place to guarantee this. <br>
					</p>
				</div>
		`;
	
		return (
			<div>{renderHTML(txt)}</div>
		);
	
	}
	
}		