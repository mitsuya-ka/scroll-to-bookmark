"use strict";
// Scroll to checked bookmark by bookmark steps for x.com(formerly twitter.com)
// (c) 2024 mitsuya_ka. 2024/12/10 V1.5.3.2
javascript: (
	async () => {
		const xtw = location.href.includes('https://x.com/');
		if (!xtw) {
			console.log("No x(formerly Twitter) page.");
			return false;
		}
		const wait = async (ms) => new Promise(resolve => setTimeout(resolve, ms));
		let count = 0;
		while (count < 20) {
			const bms = document.querySelectorAll('[aria-label^="ブックマーク"]');
			if (bms.length == 0) {
				console.log("No bookmark.");
				break;
			}
			const ibms = Array.from(bms, lbms => lbms.ariaLabel).indexOf('ブックマークに追加済み');
			if (ibms != -1) {
				bms[ibms].scrollIntoView(false);
				console.log('Found : count = ' + count + ', bm = ' + ibms);
				break;
			} else {
				bms[bms.length - 1].scrollIntoView(true);
				await wait(750);
			}
			count++;
			if (count >= 20) {
				console.log("No checked bookmark.");
			}
		}
	}
)();
