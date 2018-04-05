/* Rev11032017 fbb5f41d-df80-4a62-9b42-d0589d7d0b19::317 ** 003401b 2018-02-28 18:44:54 */

var PREBID_TIMEOUT = 1001;
pubwise.adque = pubwise.adque || [];
pubwise.loadType = 4;
pubwise.loadComplete = false;

resp_width = document.documentElement.clientWidth;
device_category = 'MOBILE';
if (resp_width >= 470){
	device_category = 'TABLET';
}
if (resp_width >= 1024){
	device_category = 'DESKTOP';
}
if (device_category === "DESKTOP") {
	var adUnits = [{
		code: "div-gpt-ad-4397870-11",
		sizes: [[300,600],[300,250],[160,600]],
		bids: [{
			bidder: 'brealtime',
			params: {
				placementId: 12332117
			}
		},{
			bidder: 'aol',
			params: {
				placement: 4700173,
				network: 10780.1
			}
		},{
			bidder: 'aol',
			params: {
				placement: 4700174,
				network: 10780.1
			}
		},{
			bidder: 'aol',
			params: {
				placement: 4700177,
				network: 10780.1
			}
		},{
			bidder: 'conversant',
			params: {
				site_id: '114745',
				secure: 1
			}
		},{
			bidder: 'districtmDMX',
			params: {
				id: 183392
			}
		},{
			bidder: 'districtmDMX',
			params: {
				id: 183393
			}
		},{
			bidder: 'districtmDMX',
			params: {
				id: 183394
			}
		},{
			bidder: 'openx',
			params: {
				unit: 539482182,
				delDomain: "launchmedia-d.openx.net"
			}
		},{
			bidder: 'openx',
			params: {
				unit: 539482178,
				delDomain: "launchmedia-d.openx.net"
			}
		},{
			bidder: 'indexExchange',
			params: {
				id: '1',
				siteID: '241551'
			}
		},{
			bidder: 'oftmedia',
			params: {
				placementId: 12606852
			}
		},{
			bidder: 'oftmedia',
			params: {
				placementId: 12607005
			}
		},{
			bidder: 'oftmedia',
			params: {
				placementId: 12607027
			}
		},{
			bidder: 'rubicon',
			params: {
				accountId: '16906',
				siteId: '150174',
				zoneId: '712302',
				sizes: [10,15,9]
			}
		}]
	},{
		code: "div-gpt-ad-4397870-16",
		sizes: [[300,600],[160,600],[300,250]],
		bids: [{
			bidder: 'brealtime',
			params: {
				placementId: 12332119
			}
		},{
			bidder: 'aol',
			params: {
				placement: 4700175,
				network: 10780.1
			}
		},{
			bidder: 'aol',
			params: {
				placement: 4700180,
				network: 10780.1
			}
		},{
			bidder: 'aol',
			params: {
				placement: 4700181,
				network: 10780.1
			}
		},{
			bidder: 'conversant',
			params: {
				site_id: '114745',
				secure: 1
			}
		},{
			bidder: 'districtmDMX',
			params: {
				id: 183395
			}
		},{
			bidder: 'districtmDMX',
			params: {
				id: 183396
			}
		},{
			bidder: 'districtmDMX',
			params: {
				id: 183397
			}
		},{
			bidder: 'openx',
			params: {
				unit: 539482183,
				delDomain: "launchmedia-d.openx.net"
			}
		},{
			bidder: 'openx',
			params: {
				unit: 539482186,
				delDomain: "launchmedia-d.openx.net"
			}
		},{
			bidder: 'indexExchange',
			params: {
				id: '2',
				siteID: '241553'
			}
		},{
			bidder: 'oftmedia',
			params: {
				placementId: 12607012
			}
		},{
			bidder: 'oftmedia',
			params: {
				placementId: 12607045
			}
		},{
			bidder: 'oftmedia',
			params: {
				placementId: 12607046
			}
		},{
			bidder: 'rubicon',
			params: {
				accountId: '16906',
				siteId: '150174',
				zoneId: '712302',
				sizes: [10,15,9]
			}
		}]
	},{
		code: "div-gpt-ad-4397870-13",
		sizes: [[300,600],[300,250],[160,600]],
		bids: [{
			bidder: 'brealtime',
			params: {
				placementId: 12332120
			}
		},{
			bidder: 'aol',
			params: {
				placement: 4700176,
				network: 10780.1
			}
		},{
			bidder: 'aol',
			params: {
				placement: 4700178,
				network: 10780.1
			}
		},{
			bidder: 'aol',
			params: {
				placement: 4700230,
				network: 10780.1
			}
		},{
			bidder: 'conversant',
			params: {
				site_id: '114745',
				secure: 1
			}
		},{
			bidder: 'districtmDMX',
			params: {
				id: 183398
			}
		},{
			bidder: 'districtmDMX',
			params: {
				id: 183399
			}
		},{
			bidder: 'districtmDMX',
			params: {
				id: 183401
			}
		},{
			bidder: 'openx',
			params: {
				unit: 539482191,
				delDomain: "launchmedia-d.openx.net"
			}
		},{
			bidder: 'openx',
			params: {
				unit: 539482196,
				delDomain: "launchmedia-d.openx.net"
			}
		},{
			bidder: 'indexExchange',
			params: {
				id: '3',
				siteID: '241552'
			}
		},{
			bidder: 'oftmedia',
			params: {
				placementId: 12607021
			}
		},{
			bidder: 'oftmedia',
			params: {
				placementId: 12607036
			}
		},{
			bidder: 'oftmedia',
			params: {
				placementId: 12607065
			}
		},{
			bidder: 'rubicon',
			params: {
				accountId: '16906',
				siteId: '150174',
				zoneId: '712302',
				sizes: [10,15,9]
			}
		}]
	},{
		code: "div-gpt-ad-4397870-1",
		sizes: [[300,250]],
		bids: [{
			bidder: 'brealtime',
			params: {
				placementId: 12332121
			}
		},{
			bidder: 'aol',
			params: {
				placement: 4700231,
				network: 10780.1
			}
		},{
			bidder: 'conversant',
			params: {
				site_id: '114745',
				secure: 1
			}
		},{
			bidder: 'districtmDMX',
			params: {
				id: 183402
			}
		},{
			bidder: 'openx',
			params: {
				unit: 539482198,
				delDomain: "launchmedia-d.openx.net"
			}
		},{
			bidder: 'indexExchange',
			params: {
				id: '4',
				siteID: '241557'
			}
		},{
			bidder: 'oftmedia',
			params: {
				placementId: 12607066
			}
		},{
			bidder: 'rubicon',
			params: {
				accountId: '16906',
				siteId: '150174',
				zoneId: '712302',
				sizes: [15]
			}
		}]
	},{
		code: "div-gpt-ad-4397870-5",
		sizes: [[728,90]],
		bids: [{
			bidder: 'brealtime',
			params: {
				placementId: 12332122
			}
		},{
			bidder: 'aol',
			params: {
				placement: 4700232,
				network: 10780.1
			}
		},{
			bidder: 'conversant',
			params: {
				site_id: '114745',
				secure: 1
			}
		},{
			bidder: 'districtmDMX',
			params: {
				id: 183403
			}
		},{
			bidder: 'openx',
			params: {
				unit: 539482208,
				delDomain: "launchmedia-d.openx.net"
			}
		},{
			bidder: 'indexExchange',
			params: {
				id: '5',
				siteID: '241561'
			}
		},{
			bidder: 'oftmedia',
			params: {
				placementId: 12607067
			}
		},{
			bidder: 'rubicon',
			params: {
				accountId: '16906',
				siteId: '150174',
				zoneId: '712302',
				sizes: [2]
			}
		}]
	},{
		code: "div-gpt-ad-4397870-21",
		sizes: [[300,600],[300,250],[160,600]],
		bids: [{
			bidder: 'conversant',
			params: {
				site_id: '114745',
				secure: 1
			}
		},{
			bidder: 'indexExchange',
			params: {
				id: '6',
				siteID: '241559'
			}
		},{
			bidder: 'openx',
			params: {
				unit: 539627163,
				delDomain: "launchmedia-d.openx.net"
			}
		},{
			bidder: 'openx',
			params: {
				unit: 539627167,
				delDomain: "launchmedia-d.openx.net"
			}
		},{
			bidder: 'brealtime',
			params: {
				placementId: 12551329
			}
		},{
			bidder: 'aol',
			params: {
				placement: 4737075,
				network: 10780.1
			}
		},{
			bidder: 'aol',
			params: {
				placement: 4737076,
				network: 10780.1
			}
		},{
			bidder: 'aol',
			params: {
				placement: 4737078,
				network: 10780.1
			}
		},{
			bidder: 'districtmDMX',
			params: {
				id: 189696
			}
		},{
			bidder: 'oftmedia',
			params: {
				placementId: 12608785
			}
		},{
			bidder: 'oftmedia',
			params: {
				placementId: 12609108
			}
		},{
			bidder: 'oftmedia',
			params: {
				placementId: 12609110
			}
		},{
			bidder: 'rubicon',
			params: {
				accountId: '16906',
				siteId: '150174',
				zoneId: '712302',
				sizes: [10,15,9]
			}
		}]
	},{
		code: "div-gpt-ad-4397870-20",
		sizes: [[300,600],[300,250],[160,600]],
		bids: [{
			bidder: 'conversant',
			params: {
				site_id: '114745',
				secure: 1
			}
		},{
			bidder: 'indexExchange',
			params: {
				id: '7',
				siteID: '241558'
			}
		},{
			bidder: 'openx',
			params: {
				unit: 539627170,
				delDomain: "launchmedia-d.openx.net"
			}
		},{
			bidder: 'openx',
			params: {
				unit: 539627171,
				delDomain: "launchmedia-d.openx.net"
			}
		},{
			bidder: 'brealtime',
			params: {
				placementId: 12551325
			}
		},{
			bidder: 'aol',
			params: {
				placement: 4737067,
				network: 10780.1
			}
		},{
			bidder: 'aol',
			params: {
				placement: 4737068,
				network: 10780.1
			}
		},{
			bidder: 'aol',
			params: {
				placement: 4737069,
				network: 10780.1
			}
		},{
			bidder: 'districtmDMX',
			params: {
				id: 189697
			}
		},{
			bidder: 'oftmedia',
			params: {
				placementId: 12608547
			}
		},{
			bidder: 'oftmedia',
			params: {
				placementId: 12608548
			}
		},{
			bidder: 'oftmedia',
			params: {
				placementId: 12608550
			}
		},{
			bidder: 'rubicon',
			params: {
				accountId: '16906',
				siteId: '150174',
				zoneId: '712302',
				sizes: [10,15,9]
			}
		}]
	},{
		code: "div-gpt-ad-4397870-19",
		sizes: [[300,600],[300,250],[160,600]],
		bids: [{
			bidder: 'conversant',
			params: {
				site_id: '114745',
				secure: 1
			}
		},{
			bidder: 'indexExchange',
			params: {
				id: '8',
				siteID: '241556'
			}
		},{
			bidder: 'openx',
			params: {
				unit: 539627176,
				delDomain: "launchmedia-d.openx.net"
			}
		},{
			bidder: 'openx',
			params: {
				unit: 539627190,
				delDomain: "launchmedia-d.openx.net"
			}
		},{
			bidder: 'brealtime',
			params: {
				placementId: 12551324
			}
		},{
			bidder: 'aol',
			params: {
				placement: 4737063,
				network: 10780.1
			}
		},{
			bidder: 'aol',
			params: {
				placement: 4737066,
				network: 10780.1
			}
		},{
			bidder: 'aol',
			params: {
				placement: 4737070,
				network: 10780.1
			}
		},{
			bidder: 'districtmDMX',
			params: {
				id: 189698
			}
		},{
			bidder: 'oftmedia',
			params: {
				placementId: 12608392
			}
		},{
			bidder: 'oftmedia',
			params: {
				placementId: 12608393
			}
		},{
			bidder: 'oftmedia',
			params: {
				placementId: 12608394
			}
		},{
			bidder: 'rubicon',
			params: {
				accountId: '16906',
				siteId: '150174',
				zoneId: '712302',
				sizes: [10,15,9]
			}
		}]
	},{
		code: "div-gpt-ad-4397870-17-2",
		sizes: [[728,90]],
		bids: [{
			bidder: 'conversant',
			params: {
				site_id: '114745',
				secure: 1
			}
		},{
			bidder: 'indexExchange',
			params: {
				id: '9',
				siteID: '241554'
			}
		},{
			bidder: 'openx',
			params: {
				unit: 539627199,
				delDomain: "launchmedia-d.openx.net"
			}
		},{
			bidder: 'brealtime',
			params: {
				placementId: 12551326
			}
		},{
			bidder: 'aol',
			params: {
				placement: 4737065,
				network: 10780.1
			}
		},{
			bidder: 'districtmDMX',
			params: {
				id: 189699
			}
		},{
			bidder: 'oftmedia',
			params: {
				placementId: 12608653
			}
		},{
			bidder: 'rubicon',
			params: {
				accountId: '16906',
				siteId: '150174',
				zoneId: '712302',
				sizes: [2]
			}
		}]
	},{
		code: "div-gpt-ad-4397870-18",
		sizes: [[970,90],[970,250],[728,90]],
		bids: [{
			bidder: 'conversant',
			params: {
				site_id: '114745',
				secure: 1
			}
		},{
			bidder: 'indexExchange',
			params: {
				id: '10',
				siteID: '241555'
			}
		},{
			bidder: 'openx',
			params: {
				unit: 539627212,
				delDomain: "launchmedia-d.openx.net"
			}
		},{
			bidder: 'openx',
			params: {
				unit: 539627217,
				delDomain: "launchmedia-d.openx.net"
			}
		},{
			bidder: 'brealtime',
			params: {
				placementId: 12551327
			}
		},{
			bidder: 'aol',
			params: {
				placement: 4737061,
				network: 10780.1
			}
		},{
			bidder: 'aol',
			params: {
				placement: 4737062,
				network: 10780.1
			}
		},{
			bidder: 'aol',
			params: {
				placement: 4737064,
				network: 10780.1
			}
		},{
			bidder: 'districtmDMX',
			params: {
				id: 189700
			}
		},{
			bidder: 'oftmedia',
			params: {
				placementId: 12608779
			}
		},{
			bidder: 'oftmedia',
			params: {
				placementId: 12608780
			}
		},{
			bidder: 'oftmedia',
			params: {
				placementId: 12608782
			}
		},{
			bidder: 'rubicon',
			params: {
				accountId: '16906',
				siteId: '150174',
				zoneId: '712302',
				sizes: [2]
			}
		}]
	},{
		code: "div-gpt-ad-4397870-3-2",
		sizes: [[728,90]],
		bids: [{
			bidder: 'conversant',
			params: {
				site_id: '114745',
				secure: 1
			}
		},{
			bidder: 'indexExchange',
			params: {
				id: '11',
				siteID: '241560'
			}
		},{
			bidder: 'openx',
			params: {
				unit: 539627229,
				delDomain: "launchmedia-d.openx.net"
			}
		},{
			bidder: 'brealtime',
			params: {
				placementId: 12551328
			}
		},{
			bidder: 'aol',
			params: {
				placement: 4737077,
				network: 10780.1
			}
		},{
			bidder: 'districtmDMX',
			params: {
				id: 189701
			}
		},{
			bidder: 'oftmedia',
			params: {
				placementId: 12608784
			}
		},{
			bidder: 'rubicon',
			params: {
				accountId: '16906',
				siteId: '150174',
				zoneId: '712302',
				sizes: [2]
			}
		}]
	}];
} else if (device_category === "TABLET") {
	var adUnits = [{
		code: "div-gpt-ad-4397870-11",
		sizes: [[300,600],[300,250],[160,600]],
		bids: [{
			bidder: 'brealtime',
			params: {
				placementId: 12332117
			}
		},{
			bidder: 'aol',
			params: {
				placement: 4700173,
				network: 10780.1
			}
		},{
			bidder: 'aol',
			params: {
				placement: 4700174,
				network: 10780.1
			}
		},{
			bidder: 'aol',
			params: {
				placement: 4700177,
				network: 10780.1
			}
		},{
			bidder: 'conversant',
			params: {
				site_id: '114745',
				secure: 1
			}
		},{
			bidder: 'districtmDMX',
			params: {
				id: 183392
			}
		},{
			bidder: 'districtmDMX',
			params: {
				id: 183393
			}
		},{
			bidder: 'districtmDMX',
			params: {
				id: 183394
			}
		},{
			bidder: 'openx',
			params: {
				unit: 539482182,
				delDomain: "launchmedia-d.openx.net"
			}
		},{
			bidder: 'openx',
			params: {
				unit: 539482178,
				delDomain: "launchmedia-d.openx.net"
			}
		},{
			bidder: 'indexExchange',
			params: {
				id: '1',
				siteID: '241551'
			}
		},{
			bidder: 'oftmedia',
			params: {
				placementId: 12606852
			}
		},{
			bidder: 'oftmedia',
			params: {
				placementId: 12607005
			}
		},{
			bidder: 'oftmedia',
			params: {
				placementId: 12607027
			}
		},{
			bidder: 'rubicon',
			params: {
				accountId: '16906',
				siteId: '150174',
				zoneId: '712302',
				sizes: [10,15,9]
			}
		}]
	},{
		code: "div-gpt-ad-4397870-16",
		sizes: [[300,600],[160,600],[300,250]],
		bids: [{
			bidder: 'brealtime',
			params: {
				placementId: 12332119
			}
		},{
			bidder: 'aol',
			params: {
				placement: 4700175,
				network: 10780.1
			}
		},{
			bidder: 'aol',
			params: {
				placement: 4700180,
				network: 10780.1
			}
		},{
			bidder: 'aol',
			params: {
				placement: 4700181,
				network: 10780.1
			}
		},{
			bidder: 'conversant',
			params: {
				site_id: '114745',
				secure: 1
			}
		},{
			bidder: 'districtmDMX',
			params: {
				id: 183395
			}
		},{
			bidder: 'districtmDMX',
			params: {
				id: 183396
			}
		},{
			bidder: 'districtmDMX',
			params: {
				id: 183397
			}
		},{
			bidder: 'openx',
			params: {
				unit: 539482183,
				delDomain: "launchmedia-d.openx.net"
			}
		},{
			bidder: 'openx',
			params: {
				unit: 539482186,
				delDomain: "launchmedia-d.openx.net"
			}
		},{
			bidder: 'indexExchange',
			params: {
				id: '2',
				siteID: '241553'
			}
		},{
			bidder: 'oftmedia',
			params: {
				placementId: 12607012
			}
		},{
			bidder: 'oftmedia',
			params: {
				placementId: 12607045
			}
		},{
			bidder: 'oftmedia',
			params: {
				placementId: 12607046
			}
		},{
			bidder: 'rubicon',
			params: {
				accountId: '16906',
				siteId: '150174',
				zoneId: '712302',
				sizes: [10,15,9]
			}
		}]
	},{
		code: "div-gpt-ad-4397870-13",
		sizes: [[300,600],[300,250],[160,600]],
		bids: [{
			bidder: 'brealtime',
			params: {
				placementId: 12332120
			}
		},{
			bidder: 'aol',
			params: {
				placement: 4700176,
				network: 10780.1
			}
		},{
			bidder: 'aol',
			params: {
				placement: 4700178,
				network: 10780.1
			}
		},{
			bidder: 'aol',
			params: {
				placement: 4700230,
				network: 10780.1
			}
		},{
			bidder: 'conversant',
			params: {
				site_id: '114745',
				secure: 1
			}
		},{
			bidder: 'districtmDMX',
			params: {
				id: 183398
			}
		},{
			bidder: 'districtmDMX',
			params: {
				id: 183399
			}
		},{
			bidder: 'districtmDMX',
			params: {
				id: 183401
			}
		},{
			bidder: 'openx',
			params: {
				unit: 539482191,
				delDomain: "launchmedia-d.openx.net"
			}
		},{
			bidder: 'openx',
			params: {
				unit: 539482196,
				delDomain: "launchmedia-d.openx.net"
			}
		},{
			bidder: 'indexExchange',
			params: {
				id: '3',
				siteID: '241552'
			}
		},{
			bidder: 'oftmedia',
			params: {
				placementId: 12607021
			}
		},{
			bidder: 'oftmedia',
			params: {
				placementId: 12607036
			}
		},{
			bidder: 'oftmedia',
			params: {
				placementId: 12607065
			}
		},{
			bidder: 'rubicon',
			params: {
				accountId: '16906',
				siteId: '150174',
				zoneId: '712302',
				sizes: [10,15,9]
			}
		}]
	},{
		code: "div-gpt-ad-4397870-1",
		sizes: [[300,250]],
		bids: [{
			bidder: 'brealtime',
			params: {
				placementId: 12332121
			}
		},{
			bidder: 'aol',
			params: {
				placement: 4700231,
				network: 10780.1
			}
		},{
			bidder: 'conversant',
			params: {
				site_id: '114745',
				secure: 1
			}
		},{
			bidder: 'districtmDMX',
			params: {
				id: 183402
			}
		},{
			bidder: 'openx',
			params: {
				unit: 539482198,
				delDomain: "launchmedia-d.openx.net"
			}
		},{
			bidder: 'indexExchange',
			params: {
				id: '4',
				siteID: '241557'
			}
		},{
			bidder: 'oftmedia',
			params: {
				placementId: 12607066
			}
		},{
			bidder: 'rubicon',
			params: {
				accountId: '16906',
				siteId: '150174',
				zoneId: '712302',
				sizes: [15]
			}
		}]
	},{
		code: "div-gpt-ad-4397870-5",
		sizes: [[728,90]],
		bids: [{
			bidder: 'brealtime',
			params: {
				placementId: 12332122
			}
		},{
			bidder: 'aol',
			params: {
				placement: 4700232,
				network: 10780.1
			}
		},{
			bidder: 'conversant',
			params: {
				site_id: '114745',
				secure: 1
			}
		},{
			bidder: 'districtmDMX',
			params: {
				id: 183403
			}
		},{
			bidder: 'openx',
			params: {
				unit: 539482208,
				delDomain: "launchmedia-d.openx.net"
			}
		},{
			bidder: 'indexExchange',
			params: {
				id: '5',
				siteID: '241561'
			}
		},{
			bidder: 'oftmedia',
			params: {
				placementId: 12607067
			}
		},{
			bidder: 'rubicon',
			params: {
				accountId: '16906',
				siteId: '150174',
				zoneId: '712302',
				sizes: [2]
			}
		}]
	},{
		code: "div-gpt-ad-4397870-21",
		sizes: [[300,600],[300,250],[160,600]],
		bids: [{
			bidder: 'conversant',
			params: {
				site_id: '114745',
				secure: 1
			}
		},{
			bidder: 'indexExchange',
			params: {
				id: '6',
				siteID: '241559'
			}
		},{
			bidder: 'openx',
			params: {
				unit: 539627163,
				delDomain: "launchmedia-d.openx.net"
			}
		},{
			bidder: 'openx',
			params: {
				unit: 539627167,
				delDomain: "launchmedia-d.openx.net"
			}
		},{
			bidder: 'brealtime',
			params: {
				placementId: 12551329
			}
		},{
			bidder: 'aol',
			params: {
				placement: 4737075,
				network: 10780.1
			}
		},{
			bidder: 'aol',
			params: {
				placement: 4737076,
				network: 10780.1
			}
		},{
			bidder: 'aol',
			params: {
				placement: 4737078,
				network: 10780.1
			}
		},{
			bidder: 'districtmDMX',
			params: {
				id: 189696
			}
		},{
			bidder: 'oftmedia',
			params: {
				placementId: 12608785
			}
		},{
			bidder: 'oftmedia',
			params: {
				placementId: 12609108
			}
		},{
			bidder: 'oftmedia',
			params: {
				placementId: 12609110
			}
		},{
			bidder: 'rubicon',
			params: {
				accountId: '16906',
				siteId: '150174',
				zoneId: '712302',
				sizes: [10,15,9]
			}
		}]
	},{
		code: "div-gpt-ad-4397870-20",
		sizes: [[300,600],[300,250],[160,600]],
		bids: [{
			bidder: 'conversant',
			params: {
				site_id: '114745',
				secure: 1
			}
		},{
			bidder: 'indexExchange',
			params: {
				id: '7',
				siteID: '241558'
			}
		},{
			bidder: 'openx',
			params: {
				unit: 539627170,
				delDomain: "launchmedia-d.openx.net"
			}
		},{
			bidder: 'openx',
			params: {
				unit: 539627171,
				delDomain: "launchmedia-d.openx.net"
			}
		},{
			bidder: 'brealtime',
			params: {
				placementId: 12551325
			}
		},{
			bidder: 'aol',
			params: {
				placement: 4737067,
				network: 10780.1
			}
		},{
			bidder: 'aol',
			params: {
				placement: 4737068,
				network: 10780.1
			}
		},{
			bidder: 'aol',
			params: {
				placement: 4737069,
				network: 10780.1
			}
		},{
			bidder: 'districtmDMX',
			params: {
				id: 189697
			}
		},{
			bidder: 'oftmedia',
			params: {
				placementId: 12608547
			}
		},{
			bidder: 'oftmedia',
			params: {
				placementId: 12608548
			}
		},{
			bidder: 'oftmedia',
			params: {
				placementId: 12608550
			}
		},{
			bidder: 'rubicon',
			params: {
				accountId: '16906',
				siteId: '150174',
				zoneId: '712302',
				sizes: [10,15,9]
			}
		}]
	},{
		code: "div-gpt-ad-4397870-19",
		sizes: [[300,600],[300,250],[160,600]],
		bids: [{
			bidder: 'conversant',
			params: {
				site_id: '114745',
				secure: 1
			}
		},{
			bidder: 'indexExchange',
			params: {
				id: '8',
				siteID: '241556'
			}
		},{
			bidder: 'openx',
			params: {
				unit: 539627176,
				delDomain: "launchmedia-d.openx.net"
			}
		},{
			bidder: 'openx',
			params: {
				unit: 539627190,
				delDomain: "launchmedia-d.openx.net"
			}
		},{
			bidder: 'brealtime',
			params: {
				placementId: 12551324
			}
		},{
			bidder: 'aol',
			params: {
				placement: 4737063,
				network: 10780.1
			}
		},{
			bidder: 'aol',
			params: {
				placement: 4737066,
				network: 10780.1
			}
		},{
			bidder: 'aol',
			params: {
				placement: 4737070,
				network: 10780.1
			}
		},{
			bidder: 'districtmDMX',
			params: {
				id: 189698
			}
		},{
			bidder: 'oftmedia',
			params: {
				placementId: 12608392
			}
		},{
			bidder: 'oftmedia',
			params: {
				placementId: 12608393
			}
		},{
			bidder: 'oftmedia',
			params: {
				placementId: 12608394
			}
		},{
			bidder: 'rubicon',
			params: {
				accountId: '16906',
				siteId: '150174',
				zoneId: '712302',
				sizes: [10,15,9]
			}
		}]
	},{
		code: "div-gpt-ad-4397870-17-2",
		sizes: [[728,90]],
		bids: [{
			bidder: 'conversant',
			params: {
				site_id: '114745',
				secure: 1
			}
		},{
			bidder: 'indexExchange',
			params: {
				id: '9',
				siteID: '241554'
			}
		},{
			bidder: 'openx',
			params: {
				unit: 539627199,
				delDomain: "launchmedia-d.openx.net"
			}
		},{
			bidder: 'brealtime',
			params: {
				placementId: 12551326
			}
		},{
			bidder: 'aol',
			params: {
				placement: 4737065,
				network: 10780.1
			}
		},{
			bidder: 'districtmDMX',
			params: {
				id: 189699
			}
		},{
			bidder: 'oftmedia',
			params: {
				placementId: 12608653
			}
		},{
			bidder: 'rubicon',
			params: {
				accountId: '16906',
				siteId: '150174',
				zoneId: '712302',
				sizes: [2]
			}
		}]
	},{
		code: "div-gpt-ad-4397870-18",
		sizes: [[970,90],[970,250],[728,90]],
		bids: [{
			bidder: 'conversant',
			params: {
				site_id: '114745',
				secure: 1
			}
		},{
			bidder: 'indexExchange',
			params: {
				id: '10',
				siteID: '241555'
			}
		},{
			bidder: 'openx',
			params: {
				unit: 539627212,
				delDomain: "launchmedia-d.openx.net"
			}
		},{
			bidder: 'openx',
			params: {
				unit: 539627217,
				delDomain: "launchmedia-d.openx.net"
			}
		},{
			bidder: 'brealtime',
			params: {
				placementId: 12551327
			}
		},{
			bidder: 'aol',
			params: {
				placement: 4737061,
				network: 10780.1
			}
		},{
			bidder: 'aol',
			params: {
				placement: 4737062,
				network: 10780.1
			}
		},{
			bidder: 'aol',
			params: {
				placement: 4737064,
				network: 10780.1
			}
		},{
			bidder: 'districtmDMX',
			params: {
				id: 189700
			}
		},{
			bidder: 'oftmedia',
			params: {
				placementId: 12608779
			}
		},{
			bidder: 'oftmedia',
			params: {
				placementId: 12608780
			}
		},{
			bidder: 'oftmedia',
			params: {
				placementId: 12608782
			}
		},{
			bidder: 'rubicon',
			params: {
				accountId: '16906',
				siteId: '150174',
				zoneId: '712302',
				sizes: [2]
			}
		}]
	},{
		code: "div-gpt-ad-4397870-3-2",
		sizes: [[728,90]],
		bids: [{
			bidder: 'conversant',
			params: {
				site_id: '114745',
				secure: 1
			}
		},{
			bidder: 'indexExchange',
			params: {
				id: '11',
				siteID: '241560'
			}
		},{
			bidder: 'openx',
			params: {
				unit: 539627229,
				delDomain: "launchmedia-d.openx.net"
			}
		},{
			bidder: 'brealtime',
			params: {
				placementId: 12551328
			}
		},{
			bidder: 'aol',
			params: {
				placement: 4737077,
				network: 10780.1
			}
		},{
			bidder: 'districtmDMX',
			params: {
				id: 189701
			}
		},{
			bidder: 'oftmedia',
			params: {
				placementId: 12608784
			}
		},{
			bidder: 'rubicon',
			params: {
				accountId: '16906',
				siteId: '150174',
				zoneId: '712302',
				sizes: [2]
			}
		}]
	}];
}
                        
currency_conversion = 1;

function fullAdjustBids(bidCpm,bidder){
    var converted = bidCpm;     
    var bid_rate = "unknown";
    var pb_conversions = {"openx": 1,"aol": 1,"pulsepoint": 1,"sovrn": 1,"jcm": 1,"indexExchange": 1,"criteo": 1,"sekindoapn": 1,"lifestreet": 1,"appnexus": 1,"pubwiseSim": 1,"defymedia": 1,"MLogic": 1,"onemobile": 1,"onedisplay": 1,"districtmDMX": 1,"brealtime": 1,"oftmedia": 1,"justpremium": 1,"rubicon": 1,"conversant": 1};
    if (pb_conversions[bidder] != undefined){
        converted = converted * pb_conversions[bidder];
        bid_rate = pb_conversions[bidder].toString();
    }
    if (currency_conversion != 1){
        converted = converted * currency_conversion;                                            
    }
                        
    console.log("Bidder Is " + bidder + " " + bidCpm.toString() + " " + currency_conversion.toString() + " " + bid_rate + " " + converted.toString());
    
    return converted;
}                

pbjs.bidderSettings = {
  standard: {
    bidCpmAdjustment : function adjustBids(bidCpm,bidResponse) {return fullAdjustBids(bidCpm,bidResponse.bidder);}
  },                    
  openx: {
     alwaysUseBid: true,
     adserverTargeting: [{
        key: "oxb",
        val: function(bidResponse) {
        var bid;
        if (bidResponse.cpm < 20) {                            
            var bidAmount = ((Math.floor(bidResponse.cpm * 100) / 100) * 100);
            bid = bidAmount.toFixed(0);
        } else {                            
            bid = "2000";
        }                        
        return bidResponse.width + "x" + bidResponse.height + "_" + bid;
     }
     }],                                       
   }
};pbjs.que.push(function() {
pbjs.setPriceGranularity("high");

                pbjs.enableAnalytics([{
                    provider: 'pubwise',
                    options: {
                        site: 'fbb5f41d-df80-4a62-9b42-d0589d7d0b19',endpoint:'https://api.pubwise.io/api/v4/event/add/'
                    }
                }]);});
/* prebid.js v0.34.1
Updated : 2017-12-20 */
!(function(e){function n(t){if(r[t])return r[t].exports;var i=r[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,n),i.l=!0,i.exports}var t=window.pbjsChunk;window.pbjsChunk=function(r,o,a){for(var s,d,u,c=0,f=[];c<r.length;c++)d=r[c],i[d]&&f.push(i[d][0]),i[d]=0;for(s in o)Object.prototype.hasOwnProperty.call(o,s)&&(e[s]=o[s]);for(t&&t(r,o,a);f.length;)f.shift()();if(a)for(c=0;c<a.length;c++)u=n(n.s=a[c]);return u};var r={},i={122:0};n.e=function(e){},n.m=e,n.c=r,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},n.p="",n.oe=function(e){throw console.error(e),e},n(n.s=339)})({0:function(e,n,t){"use strict";function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(){return S()+Math.random().toString(16).substr(2)}function o(e){if(n.isArray(e)&&2===e.length&&!isNaN(e[0])&&!isNaN(e[1]))return e[0]+"x"+e[1]}function a(){return window.console&&window.console.log}function s(){return window.console&&window.console.error}function d(e,n,t){return t.indexOf(e)===n}function u(e,n){return e.concat(n)}function c(e){return Object.keys(e)}function f(e,n){return e[n]}Object.defineProperty(n,"__esModule",{value:!0});var l=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};n.parseSizesInput=function(e){var n=[];if("string"==typeof e){var t=e.split(","),r=/^(\d)+x(\d)+$/i;if(t)for(var i in t)A(t,i)&&t[i].match(r)&&n.push(t[i])}else if("object"===(void 0===e?"undefined":p(e))){var a=e.length;if(a>0)if(2===a&&"number"==typeof e[0]&&"number"==typeof e[1])n.push(o(e));else for(var s=0;s<a;s++)n.push(o(e[s]))}return n},n.parseGPTSingleSizeArray=o,n.uniques=d,n.flatten=u,n.getBidRequest=function(e){return pbjs._bidsRequested.map((function(n){return n.bids.find((function(n){return n.bidId===e}))})).find((function(e){return e}))},n.getKeys=c,n.getValue=f,n.getBidderCodes=function(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:pbjs.adUnits).map((function(e){return e.bids.map((function(e){return e.bidder})).reduce(u,[])})).reduce(u).filter(d)},n.isGptPubadsDefined=function(){if(window.googletag&&n.isFn(window.googletag.pubads)&&n.isFn(window.googletag.pubads().getSlots))return!0},n.getHighestCpm=function(e,n){return e.cpm===n.cpm?e.timeToRespond>n.timeToRespond?n:e:e.cpm<n.cpm?n:e},n.shuffle=function(e){for(var n=e.length;n>0;){var t=Math.floor(Math.random()*n),r=e[--n];e[n]=e[t],e[t]=r}return e},n.adUnitsFilter=function(e,n){return e.includes(n&&n.placementCode||n&&n.adUnitCode)},n.isSrcdocSupported=function(e){return e.defaultView&&e.defaultView.frameElement&&"srcdoc"in e.defaultView.frameElement&&!/firefox/i.test(navigator.userAgent)},n.deepClone=function(e){return(0,b.default)(e)},n.inIframe=function(){try{return window.self!==window.top}catch(e){return!0}},n.isSafariBrowser=function(){return/^((?!chrome|android).)*safari/i.test(navigator.userAgent)},n.replaceAuctionPrice=function(e,n){if(e)return e.replace(/\$\{AUCTION_PRICE\}/g,n)},n.getBidderRequestAllAdUnits=function(e){return pbjs._bidsRequested.find((function(n){return n.bidderCode===e}))},n.getBidderRequest=function(e,n){return pbjs._bidsRequested.find((function(t){return t.bids.filter((function(t){return t.bidder===e&&t.placementCode===n})).length>0}))||{start:null,requestId:null}},n.cookiesAreEnabled=function(){return!(!window.navigator.cookieEnabled&&!document.cookie.length)||(window.document.cookie="prebid.cookieTest",-1!=window.document.cookie.indexOf("prebid.cookieTest"))},n.delayExecution=function(e,n){if(n<1)throw new Error("numRequiredCalls must be a positive number. Got "+n);var t=0;return function(){++t===n&&e.apply(null,arguments)}},n.groupBy=function(e,n){return e.reduce((function(e,t){return(e[t[n]]=e[t[n]]||[]).push(t),e}),{})},n.deepAccess=function(e,n){n=String(n).split(".");for(var t=0;t<n.length;t++)if(void 0===(e=e[n[t]]))return;return e},n.createContentToExecuteExtScriptInFriendlyFrame=function(e){return e?'<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd"><html><head><base target="_top" /><script>inDapIF=true;<\/script></head><body>\x3c!--PRE_SCRIPT_TAG_MACRO--\x3e<script src="'+e+'"><\/script>\x3c!--POST_SCRIPT_TAG_MACRO--\x3e</body></html>':""},n.getDefinedParams=function(e,n){return n.filter((function(n){return e[n]})).reduce((function(n,t){return l(n,r({},t,e[t]))}),{})},n.isValidMediaTypes=function(e){var n=["banner","native","video"],t=["instream","outstream"];return!!Object.keys(e).every((function(e){return n.includes(e)}))&&(!e.video||!e.video.context||t.includes(e.video.context))},n.unsupportedBidderMessage=function(e,n){var t=e.mediaType||Object.keys(e.mediaTypes).join(", "),r=1===n.length?"This bidder":"These bidders";return"\n    "+e.code+" is a "+t+" ad unit\n    containing bidders that don't support "+t+": "+n.join(", ")+".\n    "+r+" won't fetch demand.\n  "};var g=t(9),b=(function(e){return e&&e.__esModule?e:{default:e}})(t(46)),v=t(4),y=!1,m=Object.prototype.toString,h=null;try{h=console.info.bind(window.console)}catch(e){}n.replaceTokenInString=function(e,n,t){return this._each(n,(function(n,r){n=void 0===n?"":n;var i=t+r.toUpperCase()+t,o=new RegExp(i,"g");e=e.replace(o,n)})),e};var S=(function(){var e=0;return function(){return++e}})();n.getUniqueIdentifierStr=i,n.generateUUID=function e(n){return n?(n^16*Math.random()>>n/4).toString(16):([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,e)},n.getBidIdParameter=function(e,n){return n&&n[e]?n[e]:""},n.tryAppendQueryString=function(e,n,t){return t?e+=n+"="+encodeURIComponent(t)+"&":e},n.parseQueryStringParameters=function(e){var n="";for(var t in e)e.hasOwnProperty(t)&&(n+=t+"="+encodeURIComponent(e[t])+"&");return n},n.transformAdServerTargetingObj=function(e){return e&&Object.getOwnPropertyNames(e).length>0?c(e).map((function(n){return n+"="+encodeURIComponent(f(e,n))})).join("&"):""},n.getTopWindowLocation=function(){var e=void 0;try{window.top.location.toString(),e=window.top.location}catch(n){e=window.location}return e},n.getTopWindowUrl=function(){var e=void 0;try{e=this.getTopWindowLocation().href}catch(n){e=""}return e},n.getTopWindowReferrer=function(){try{return window.top.document.referrer}catch(e){return document.referrer}},n.logWarn=function(e){E()&&console.warn&&console.warn("WARNING: "+e)},n.logInfo=function(e,n){E()&&a()&&h&&(n&&0!==n.length||(n=""),h("INFO: "+e+(""===n?"":" : params : "),n))},n.logMessage=function(e){E()&&a()&&console.log("MESSAGE: "+e)},n.hasConsoleLogger=a;var E=function(){if(!1===g.config.getConfig("debug")&&!1===y){var e="TRUE"===T(v.DEBUG_MODE).toUpperCase();g.config.setConfig({debug:e}),y=!0}return!!g.config.getConfig("debug")};n.debugTurnedOn=E,n.logError=function(){E()&&s()&&console.error.apply(console,arguments)},n.createInvisibleIframe=function(){var e=document.createElement("iframe");return e.id=i(),e.height=0,e.width=0,e.border="0px",e.hspace="0",e.vspace="0",e.marginWidth="0",e.marginHeight="0",e.style.border="0",e.scrolling="no",e.frameBorder="0",e.src="about:blank",e.style.display="none",e};var T=function(e){var n="[\\?&]"+e+"=([^&#]*)",t=new RegExp(n).exec(window.location.search);return null===t?"":decodeURIComponent(t[1].replace(/\+/g," "))};n.getParameterByName=T,n.hasValidBidRequest=function(e,n,t){for(var r=!1,i=0;i<n.length;i++)if(r=!1,this._each(e,(function(e,t){t===n[i]&&(r=!0)})),!r)return this.logError("Params are missing for bid request. One of these required paramaters are missing: "+n,t),!1;return!0},n.addEventHandler=function(e,n,t){e.addEventListener?e.addEventListener(n,t,!0):e.attachEvent&&e.attachEvent("on"+n,t)},n.isA=function(e,n){return m.call(e)==="[object "+n+"]"},n.isFn=function(e){return this.isA(e,"Function")},n.isStr=function(e){return this.isA(e,"String")},n.isArray=function(e){return this.isA(e,"Array")},n.isNumber=function(e){return this.isA(e,"Number")},n.isEmpty=function(e){if(!e)return!0;if(n.isArray(e)||n.isStr(e))return!(e.length>0);for(var t in e)if(hasOwnProperty.call(e,t))return!1;return!0},n.isEmptyStr=function(e){return this.isStr(e)&&(!e||0===e.length)},n._each=function(e,n){if(!this.isEmpty(e)){if(this.isFn(e.forEach))return e.forEach(n,this);var t=0,r=e.length;if(r>0)for(;t<r;t++)n(e[t],t,e);else for(t in e)hasOwnProperty.call(e,t)&&n.call(this,e[t],t)}},n.contains=function(e,n){if(this.isEmpty(e))return!1;if(this.isFn(e.indexOf))return-1!==e.indexOf(n);for(var t=e.length;t--;)if(e[t]===n)return!0;return!1},n.indexOf=(function(){if(Array.prototype.indexOf)return Array.prototype.indexOf})(),n._map=function(e,n){if(this.isEmpty(e))return[];if(this.isFn(e.map))return e.map(n);var t=[];return this._each(e,(function(r,i){t.push(n(r,i,e))})),t};var A=function(e,n){return e.hasOwnProperty?e.hasOwnProperty(n):void 0!==e[n]&&e.constructor.prototype[n]!==e[n]};n.insertElement=function(e,n,t){n=n||document;var r=void 0;r=t?n.getElementsByTagName(t):n.getElementsByTagName("head");try{(r=r.length?r:n.getElementsByTagName("body")).length&&(r=r[0]).insertBefore(e,r.firstChild)}catch(e){}},n.triggerPixel=function(e){(new Image).src=e},n.insertUserSyncIframe=function(e){var t=this.createTrackPixelIframeHtml(e,!1,"allow-scripts allow-same-origin"),r=document.createElement("div");r.innerHTML=t;var i=r.firstChild;n.insertElement(i)},n.createTrackPixelHtml=function(e){if(!e)return"";var n='<div style="position:absolute;left:0px;top:0px;visibility:hidden;">';return n+='<img src="'+encodeURI(e)+'"></div>'},n.createTrackPixelIframeHtml=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";return e?(t&&(e=encodeURI(e)),r&&(r='sandbox="'+r+'"'),"<iframe "+r+' id="'+n.getUniqueIdentifierStr()+'"\n      frameborder="0"\n      allowtransparency="true"\n      marginheight="0" marginwidth="0"\n      width="0" hspace="0" vspace="0" height="0"\n      style="height:0p;width:0p;display:none;"\n      scrolling="no"\n      src="'+e+'">\n    </iframe>'):""},n.getIframeDocument=function(e){if(e){var n=void 0;try{n=e.contentWindow?e.contentWindow.document:e.contentDocument.document?e.contentDocument.document:e.contentDocument}catch(e){this.logError("Cannot get iframe document",e)}return n}},n.getValueString=function(e,n,t){return void 0===n||null===n?t:this.isStr(n)?n:this.isNumber(n)?n.toString():void this.logWarn("Unsuported type for param: "+e+" required type: String")}},1:function(e,n,t){"use strict";function r(e){var n=e.bidderCode,t=e.requestId,r=e.bidderRequestId;return e.adUnits.map((function(e){return e.bids.filter((function(e){return e.bidder===n})).map((function(n){var i=e.sizes;if(e.sizeMapping){var o=(0,d.mapSizes)(e);if(""===o)return"";i=o}e.mediaTypes&&(f.isValidMediaTypes(e.mediaTypes)?n=a({},n,{mediaTypes:e.mediaTypes}):f.logError("mediaTypes is not correctly configured for adunit "+e.code));var c=e.nativeParams||f.deepAccess(e,"mediaTypes.native");return c&&(n=a({},n,{nativeParams:(0,u.processNativeAdUnitParams)(c)})),n=a({},n,(0,s.getDefinedParams)(e,["mediaType","renderer"])),a({},n,{placementCode:e.code,transactionId:e.transactionId,sizes:i,bidId:n.bid_id||f.getUniqueIdentifierStr(),bidderRequestId:r,requestId:t})}))})).reduce(s.flatten,[]).filter((function(e){return""!==e}))}function i(e){var n=[];return f.parseSizesInput(e.sizes).forEach((function(e){var t=e.split("x"),r={w:parseInt(t[0]),h:parseInt(t[1])};n.push(r)})),n}function o(e){var t=[];return n.videoAdapters.includes(e)&&t.push("video"),u.nativeAdapters.includes(e)&&t.push("native"),t}var a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},s=t(0),d=t(47),u=t(15),c=t(6),f=t(0),l=t(4),p=t(11),g=void 0,b={};n.bidderRegistry=b;var v={endpoint:l.S2S.DEFAULT_ENDPOINT,adapter:l.S2S.ADAPTER,syncEndpoint:l.S2S.SYNC_ENDPOINT},y={};y.random=!0,y.fixed=!0;var m={},h="random";n.callBids=function(e){var n=e.adUnits,t=e.cbTimeout,o=f.generateUUID(),a=Date.now(),u={timestamp:a,requestId:o,timeout:t};p.emit(l.EVENTS.AUCTION_INIT,u);var c=(0,s.getBidderCodes)(n);"random"===h&&(c=(0,s.shuffle)(c));var y=b[v.adapter];y&&(y.setConfig(v),y.queueSync({bidderCodes:c}));var m=[],S=!1;if(v.enabled){(S=v.testing&&void 0!==g)&&(m=g.getSourceBidderMap(n)[g.CLIENT]);var E=v.bidders;c=c.filter((function(e){return!E.includes(e)||m.includes(e)}));var T=f.deepClone(n);T.forEach((function(e){e.sizeMapping&&(e.sizes=(0,d.mapSizes)(e),delete e.sizeMapping),e.sizes=i(e),e.bids=e.bids.filter((function(e){return E.includes(e.bidder)&&(!S||e.finalSource!==g.CLIENT)})).map((function(e){return e.bid_id=f.getUniqueIdentifierStr(),e}))})),T=T.filter((function(e){return 0!==e.bids.length}));var A=f.generateUUID();E.forEach((function(e){var n=f.getUniqueIdentifierStr(),t={bidderCode:e,requestId:o,bidderRequestId:n,tid:A,bids:r({bidderCode:e,requestId:o,bidderRequestId:n,adUnits:T}),start:(new Date).getTime(),auctionStart:a,timeout:v.timeout,src:l.S2S.SRC};0!==t.bids.length&&(pbjs._bidsRequested.push(t),p.emit(l.EVENTS.BID_REQUESTED,t))}));var _={tid:A,ad_units:T};f.logMessage("CALLING S2S HEADER BIDDERS ==== "+E.join(",")),_.ad_units.length&&y.callBids(_)}var I=[],w=f.deepClone(n);w.forEach((function(e){e.bids=e.bids.filter((function(e){return!S||e.finalSource!==g.SERVER}))})),w=w.filter((function(e){return 0!==e.bids.length})),c.forEach((function(e){if(b[e]){var n=f.getUniqueIdentifierStr(),i={bidderCode:e,requestId:o,bidderRequestId:n,bids:r({bidderCode:e,requestId:o,bidderRequestId:n,adUnits:w}),auctionStart:a,timeout:t};i.bids&&0!==i.bids.length&&(pbjs._bidsRequested.push(i),I.push(i))}else f.logError("Adapter trying to be called which does not exist: "+e+" adaptermanager.callBids")})),I.forEach((function(e){e.start=(new Date).getTime();var n=b[e.bidderCode];e.bids&&0!==e.bids.length&&(f.logMessage("CALLING BIDDER ======= "+e.bidderCode),p.emit(l.EVENTS.BID_REQUESTED,e),n.callBids(e))}))},n.videoAdapters=[],n.registerBidAdapter=function(e,t){var r=(arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}).supportedMediaTypes,i=void 0===r?[]:r;e&&t?"function"==typeof e.callBids?(b[t]=e,i.includes("video")&&n.videoAdapters.push(t),i.includes("native")&&u.nativeAdapters.push(t)):f.logError("Bidder adaptor error for bidder code: "+t+"bidder must implement a callBids() function"):f.logError("bidAdaptor or bidderCode not specified")},n.aliasBidAdapter=function(e,n){if(void 0===b[n]){var t=b[e];if(void 0===t)f.logError('bidderCode "'+e+'" is not an existing bidder.',"adaptermanager.aliasBidAdapter");else try{var r=void 0,i=o(e);if(t.constructor.prototype!=Object.prototype)(r=new t.constructor).setBidderCode(n);else{var s=t.getSpec();r=(0,c.newBidder)(a({},s,{code:n}))}this.registerBidAdapter(r,n,{supportedMediaTypes:i})}catch(n){f.logError(e+" bidder does not currently support aliasing.","adaptermanager.aliasBidAdapter")}}else f.logMessage('alias name "'+n+'" has been already specified.')},n.registerAnalyticsAdapter=function(e){var n=e.adapter,t=e.code;n&&t?"function"==typeof n.enableAnalytics?(n.code=t,m[t]=n):f.logError('Prebid Error: Analytics adaptor error for analytics "'+t+'"\n        analytics adapter must implement an enableAnalytics() function'):f.logError("Prebid Error: analyticsAdapter or analyticsCode not specified")},n.enableAnalytics=function(e){f.isArray(e)||(e=[e]),f._each(e,(function(e){var n=m[e.provider];n?n.enableAnalytics(e):f.logError("Prebid Error: no analytics adapter found in registry for\n        "+e.provider+".")}))},n.setBidderSequence=function(e){y[e]?h=e:f.logWarn("Invalid order: "+e+". Bidder Sequence was not set.")},n.getBidAdapter=function(e){return b[e]},n.setS2SConfig=function(e){v=e},n.setS2STestingModule=function(e){g=e}},11:function(e,n,t){"use strict";var r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},i=t(0),o=t(4),a=Array.prototype.slice,s=Array.prototype.push,d=i._map(o.EVENTS,(function(e){return e})),u=o.EVENT_ID_PATHS,c=[];e.exports=(function(){function e(e,n){i.logMessage("Emitting event for: "+e);var r=n[0]||{},o=r[u[e]],a=t[e]||{que:[]},d=i._map(a,(function(e,n){return n})),f=[];c.push({eventType:e,args:r,id:o}),o&&i.contains(d,o)&&s.apply(f,a[o].que),s.apply(f,a.que),i._each(f,(function(e){if(e)try{e.apply(null,n)}catch(e){i.logError("Error executing handler:","events.js",e)}}))}function n(e){return i.contains(d,e)}var t={},o={};return o.on=function(e,r,o){if(n(e)){var a=t[e]||{que:[]};o?(a[o]=a[o]||{que:[]},a[o].que.push(r)):a.que.push(r),t[e]=a}else i.logError("Wrong event name : "+e+" Valid event names :"+d)},o.emit=function(n){e(n,a.call(arguments,1))},o.off=function(e,n,r){var o=t[e];i.isEmpty(o)||i.isEmpty(o.que)&&i.isEmpty(o[r])||r&&(i.isEmpty(o[r])||i.isEmpty(o[r].que))||(r?i._each(o[r].que,(function(e){var t=o[r].que;e===n&&t.splice(i.indexOf.call(t,e),1)})):i._each(o.que,(function(e){var t=o.que;e===n&&t.splice(i.indexOf.call(t,e),1)})),t[e]=o)},o.get=function(){return t},o.getEvents=function(){var e=[];return i._each(c,(function(n){var t=r({},n);e.push(t)})),e},o})()},12:function(e,n,t){"use strict";function r(e){return e?e.replace(/^\?/,"").split("&").reduce((function(e,n){var t=n.split("="),r=o(t,2),i=r[0],a=r[1];return/\[\]$/.test(i)?(e[i=i.replace("[]","")]=e[i]||[],e[i].push(a)):e[i]=a||"",e}),{}):{}}function i(e){return Object.keys(e).map((function(n){return Array.isArray(e[n])?e[n].map((function(e){return n+"[]="+e})).join("&"):n+"="+e[n]})).join("&")}Object.defineProperty(n,"__esModule",{value:!0});var o=(function(){function e(e,n){var t=[],r=!0,i=!1,o=void 0;try{for(var a,s=e[Symbol.iterator]();!(r=(a=s.next()).done)&&(t.push(a.value),!n||t.length!==n);r=!0);}catch(e){i=!0,o=e}finally{try{!r&&s.return&&s.return()}finally{if(i)throw o}}return t}return function(n,t){if(Array.isArray(n))return n;if(Symbol.iterator in Object(n))return e(n,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}})();n.parseQS=r,n.formatQS=i,n.parse=function(e,n){var t=document.createElement("a");return n&&"noDecodeWholeURL"in n&&n.noDecodeWholeURL?t.href=e:t.href=decodeURIComponent(e),{protocol:(t.protocol||"").replace(/:$/,""),hostname:t.hostname,port:+t.port,pathname:t.pathname.replace(/^(?!\/)/,"/"),search:r(t.search||""),hash:(t.hash||"").replace(/^#/,""),host:t.host||window.location.host}},n.format=function(e){return(e.protocol||"http")+"://"+(e.host||e.hostname+(e.port?":"+e.port:""))+(e.pathname||"")+(e.search?"?"+i(e.search||""):"")+(e.hash?"#"+e.hash:"")}},13:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});n.NATIVE="native",n.VIDEO="video",n.BANNER="banner"},14:function(e,n){var t=e.exports={version:"2.5.1"};"number"==typeof __e&&(__e=t)},15:function(e,n,t){"use strict";function r(e){return!(!e||!Object.keys(d).includes(e))||((0,o.logError)(e+" nativeParam is not supported"),!1)}Object.defineProperty(n,"__esModule",{value:!0}),n.hasNonNativeBidder=n.nativeBidder=n.nativeAdUnit=n.NATIVE_TARGETING_KEYS=n.NATIVE_KEYS=n.nativeAdapters=void 0;var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};n.processNativeAdUnitParams=function(e){return e&&e.type&&r(e.type)?d[e.type]:e},n.nativeBidIsValid=function(e){var n=(0,o.getBidRequest)(e.adId);if(!n)return!1;if(!(0,o.deepAccess)(e,"native.clickUrl"))return!1;var t=n.nativeParams;if(!t)return!0;var r=Object.keys(t).filter((function(e){return t[e].required})),i=Object.keys(e.native).filter((function(n){return e.native[n]}));return r.every((function(e){return i.includes(e)}))},n.fireNativeTrackers=function(e,n){(("click"===e.action?n.native&&n.native.clickTrackers:n.native&&n.native.impressionTrackers)||[]).forEach(o.triggerPixel)},n.getNativeTargeting=function(e){var n={};return Object.keys(e.native).forEach((function(t){var r=s[t],o=e.native[t];"object"===(void 0===o?"undefined":i(o))&&o.url&&(o=o.url),r&&(n[r]=o)})),n};var o=t(0),a=n.nativeAdapters=[],s=n.NATIVE_KEYS={title:"hb_native_title",body:"hb_native_body",sponsoredBy:"hb_native_brand",image:"hb_native_image",icon:"hb_native_icon",clickUrl:"hb_native_linkurl",cta:"hb_native_cta"},d=(n.NATIVE_TARGETING_KEYS=Object.keys(s).map((function(e){return s[e]})),{image:{image:{required:!0},title:{required:!0},sponsoredBy:{required:!0},clickUrl:{required:!0},body:{required:!1},icon:{required:!1}}}),u=(n.nativeAdUnit=function(e){var n="native"===e.mediaType,t=(0,o.deepAccess)(e,"mediaTypes.native");return n||t},n.nativeBidder=function(e){return a.includes(e.bidder)});n.hasNonNativeBidder=function(e){return e.bids.filter((function(e){return!u(e)})).length}},16:function(e,n){var t=e.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=t)},17:function(e,n,t){"use strict";function r(e){var n=this,t=e.url,r=e.config,a=e.id,s=e.callback,d=e.loaded;this.url=t,this.config=r,this.handlers={},this.id=a,this.loaded=d,this.cmd=[],this.push=function(e){"function"==typeof e?n.loaded?e.call():n.cmd.push(e):o.logError("Commands given to Renderer.push must be wrapped in a function")},this.callback=s||function(){n.loaded=!0,n.process()},(0,i.loadScript)(t,this.callback,!0)}Object.defineProperty(n,"__esModule",{value:!0}),n.Renderer=r;var i=t(5),o=(function(e){if(e&&e.__esModule)return e;var n={};if(null!=e)for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(n[t]=e[t]);return n.default=e,n})(t(0));r.install=function(e){return new r({url:e.url,config:e.config,id:e.id,callback:e.callback,loaded:e.loaded})},r.prototype.getConfig=function(){return this.config},r.prototype.setRender=function(e){this.render=e},r.prototype.setEventHandlers=function(e){this.handlers=e},r.prototype.handleVideoEvent=function(e){var n=e.id,t=e.eventName;"function"==typeof this.handlers[t]&&this.handlers[t](),o.logMessage("Prebid Renderer event for id "+n+" type "+t)},r.prototype.process=function(){for(;this.cmd.length>0;)try{this.cmd.shift().call()}catch(e){o.logError("Error processing Renderer command: ",e)}}},18:function(e,n,t){"use strict";function r(e){function n(){return{image:[],iframe:[]}}function t(){if(g.syncEnabled&&e.browserSupportsCookies&&!l){try{r(),d()}catch(e){return a.logError("Error firing user syncs",e)}f=n(),l=!0}}function r(){g.pixelEnabled&&a.shuffle(f.image).forEach((function(e){var n=i(e,2),t=n[0],r=n[1];a.logMessage("Invoking image pixel user sync for bidder: "+t),a.triggerPixel(r)}))}function d(){g.iframeEnabled&&a.shuffle(f.iframe).forEach((function(e){var n=i(e,2),t=n[0],r=n[1];a.logMessage("Invoking iframe user sync for bidder: "+t),a.insertUserSyncIframe(r)}))}function u(e,n){return e[n]?e[n]+=1:e[n]=1,e}var c={},f=n(),l=!1,p={},g=e.config;return s.config.getConfig("userSync",(function(e){g=o(g,e.userSync)})),c.registerSync=function(e,n,t){return g.syncEnabled&&a.isArray(f[e])?n?Number(p[n])>=g.syncsPerBidder?a.logWarn('Number of user syncs exceeded for "{$bidder}"'):g.enabledBidders&&g.enabledBidders.length&&g.enabledBidders.indexOf(n)<0?a.logWarn('Bidder "'+n+'" not supported'):(f[e].push([n,t]),void(p=u(p,n))):a.logWarn("Bidder is required for registering sync"):a.logWarn('User sync type "'+e+'" not supported')},c.syncUsers=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;if(e)return window.setTimeout(t,Number(e));t()},c.triggerUserSyncs=function(){g.enableOverride&&c.syncUsers()},c}Object.defineProperty(n,"__esModule",{value:!0}),n.userSync=void 0;var i=(function(){function e(e,n){var t=[],r=!0,i=!1,o=void 0;try{for(var a,s=e[Symbol.iterator]();!(r=(a=s.next()).done)&&(t.push(a.value),!n||t.length!==n);r=!0);}catch(e){i=!0,o=e}finally{try{!r&&s.return&&s.return()}finally{if(i)throw o}}return t}return function(n,t){if(Array.isArray(n))return n;if(Symbol.iterator in Object(n))return e(n,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}})(),o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e};n.newUserSync=r;var a=(function(e){if(e&&e.__esModule)return e;var n={};if(null!=e)for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(n[t]=e[t]);return n.default=e,n})(t(0)),s=t(9);s.config.setDefaults({userSync:{syncEnabled:!0,pixelEnabled:!0,syncsPerBidder:5,syncDelay:3e3}});var d=!a.isSafariBrowser()&&a.cookiesAreEnabled();n.userSync=r({config:s.config.getConfig("userSync"),browserSupportsCookies:d})},19:function(e,n,t){var r=t(16),i=t(14),o=t(22),a=t(350),s=t(33),d=function(e,n,t){var u,c,f,l,p=e&d.F,g=e&d.G,b=e&d.S,v=e&d.P,y=e&d.B,m=g?r:b?r[n]||(r[n]={}):(r[n]||{}).prototype,h=g?i:i[n]||(i[n]={}),S=h.prototype||(h.prototype={});g&&(t=n);for(u in t)f=((c=!p&&m&&void 0!==m[u])?m:t)[u],l=y&&c?s(f,r):v&&"function"==typeof f?s(Function.call,f):f,m&&a(m,u,f,e&d.U),h[u]!=f&&o(h,u,l),v&&S[u]!=f&&(S[u]=f)};r.core=i,d.F=1,d.G=2,d.S=4,d.P=8,d.B=16,d.W=32,d.U=64,d.R=128,e.exports=d},2:function(e,n,t){"use strict";function r(){return(new Date).getTime()}function i(e){return e.bidderCode}function o(e){return e.bidder}function a(e){var n=this;return pbjs._bidsRequested.map((function(t){return t.bids.filter(_.adUnitsFilter.bind(n,pbjs._adUnitCodes)).filter((function(n){return n.placementCode===e}))})).reduce(_.flatten,[]).map((function(e){return"indexExchange"===e.bidder?e.sizes.length:1})).reduce(s,0)===pbjs._bidsReceived.filter((function(n){return n.adUnitCode===e})).length}function s(e,n){return e+n}function d(){return pbjs._bidsRequested.map((function(e){return e.bids})).reduce(_.flatten,[]).filter(_.adUnitsFilter.bind(this,pbjs._adUnitCodes)).map((function(e){return"indexExchange"===e.bidder?e.sizes.length:1})).reduce((function(e,n){return e+n}),0)===pbjs._bidsReceived.filter(_.adUnitsFilter.bind(this,pbjs._adUnitCodes)).length}function u(e,n){function t(n){return"Invalid bid from "+e.bidderCode+". Ignoring bid: "+n}return e?n?(0,_.getBidderRequest)(e.bidderCode,n).start?"native"!==e.mediaType||(0,w.nativeBidIsValid)(e)?"video"!==e.mediaType||(0,C.isValidVideoBid)(e)?!("banner"===e.mediaType&&!c(e,n))||(R.logError(t("Banner bids require a width and height")),!1):(R.logError(t("Video bid does not have required vastUrl or renderer property")),!1):(R.logError(t("Native bid missing some required properties.")),!1):(R.logError(t("Cannot find valid matching bid request.")),!1):(R.logError(t("No adUnitCode was supplied to addBidResponse.")),!1):(R.logError("Some adapter tried to add an undefined bid for "+n+"."),!1)}function c(e,n){if((e.width||0===e.width)&&(e.height||0===e.height))return!0;var t=(0,_.getBidderRequest)(e.bidderCode,n),r=t&&t.bids&&t.bids[0]&&t.bids[0].sizes,i=R.parseSizesInput(r);if(1===i.length){var o=i[0].split("x"),a=A(o,2),s=a[0],d=a[1];return e.width=s,e.height=d,!0}return!1}function f(e,n){var t=(0,_.getBidderRequest)(e.bidderCode,n);T(e,{requestId:t.requestId,responseTimestamp:r(),requestTimestamp:t.start,cpm:parseFloat(e.cpm)||0,bidder:e.bidderCode,adUnitCode:n}),e.timeToRespond=e.responseTimestamp-e.requestTimestamp,k.emit(N.EVENTS.BID_ADJUSTMENT,e);var i=t.bids&&t.bids[0]&&t.bids[0].renderer;i&&(e.renderer=O.Renderer.install({url:i.url}),e.renderer.setRender(i.render));var o=(0,I.getPriceBucketString)(e.cpm,B.config.getConfig("customPriceBucket"),B.config.getConfig("currency.granularityMultiplier"));e.pbLg=o.low,e.pbMg=o.med,e.pbHg=o.high,e.pbAg=o.auto,e.pbDg=o.dense,e.pbCg=o.custom;var a;e.bidderCode&&(e.cpm>0||e.dealId)&&(a=b(e.bidderCode,e)),e.adserverTargeting=T(e.adserverTargeting||{},a)}function l(e){if(e.timeToRespond>pbjs.cbTimeout+pbjs.timeoutBuffer){n.executeCallback(!0)}}function p(e){k.emit(N.EVENTS.BID_RESPONSE,e),pbjs._bidsReceived.push(e),e.adUnitCode&&a(e.adUnitCode)&&y(e.adUnitCode),d()&&n.executeCallback()}function g(e){B.config.getConfig("usePrebidCache")?(0,j.store)([e],(function(n,t){n?R.logWarn("Failed to save to the video cache: "+n+". Video bid must be discarded."):(e.videoCacheKey=t[0].uuid,e.vastUrl||(e.vastUrl=(0,j.getCacheUrl)(e.videoCacheKey)),p(e)),l(e)})):(p(e),l(e))}function b(e,n){var t={},r=pbjs.bidderSettings;return n&&r&&v(t,E(),n),e&&n&&r&&r[e]&&r[e][N.JSON_MAPPING.ADSERVER_TARGETING]?(v(t,r[e],n),n.alwaysUseBid=r[e].alwaysUseBid,n.sendStandardTargeting=r[e].sendStandardTargeting):x[e]&&(v(t,x[e],n),n.alwaysUseBid=x[e].alwaysUseBid,n.sendStandardTargeting=x[e].sendStandardTargeting),n.native&&(t=T({},t,(0,w.getNativeTargeting)(n))),t}function v(e,n,t){var r=n[N.JSON_MAPPING.ADSERVER_TARGETING];return t.size=t.getSize(),R._each(r,(function(r){var i=r.key,o=r.val;if(e[i]&&R.logWarn("The key: "+i+" is getting ovewritten"),R.isFn(o))try{o=o(t)}catch(e){R.logError("bidmanager","ERROR",e)}(void 0===n.suppressEmptyKeys||!0!==n.suppressEmptyKeys)&&"hb_deal"!==i||!R.isEmptyStr(o)&&null!==o&&void 0!==o?e[i]=o:R.logInfo("suppressing empty key '"+i+"' from adserver targeting")})),e}function y(e){var n=[e];m(D.byAdUnit,n)}function m(e,n){var t=this;R.isArray(e)&&e.forEach((function(e){var r=n||pbjs._adUnitCodes,i=[pbjs._bidsReceived.filter(_.adUnitsFilter.bind(t,r)).reduce(h,{})];e.apply(pbjs,i)}))}function h(e,n){return e[n.adUnitCode]||(e[n.adUnitCode]={bids:[]}),e[n.adUnitCode].bids.push(n),e}function S(e){var n=e.bidderCode,t=e.cpm,r=void 0;if(pbjs.bidderSettings&&(n&&pbjs.bidderSettings[n]&&"function"==typeof pbjs.bidderSettings[n].bidCpmAdjustment?r=pbjs.bidderSettings[n].bidCpmAdjustment:pbjs.bidderSettings[N.JSON_MAPPING.BD_SETTING_STANDARD]&&"function"==typeof pbjs.bidderSettings[N.JSON_MAPPING.BD_SETTING_STANDARD].bidCpmAdjustment&&(r=pbjs.bidderSettings[N.JSON_MAPPING.BD_SETTING_STANDARD].bidCpmAdjustment),r))try{t=r(e.cpm,T({},e))}catch(e){R.logError("Error during bid adjustment","bidmanager.js",e)}t>=0&&(e.cpm=t)}function E(){var e=B.config.getConfig("priceGranularity"),n=pbjs.bidderSettings;return n[N.JSON_MAPPING.BD_SETTING_STANDARD]||(n[N.JSON_MAPPING.BD_SETTING_STANDARD]={}),n[N.JSON_MAPPING.BD_SETTING_STANDARD][N.JSON_MAPPING.ADSERVER_TARGETING]||(n[N.JSON_MAPPING.BD_SETTING_STANDARD][N.JSON_MAPPING.ADSERVER_TARGETING]=[{key:"hb_bidder",val:function(e){return e.bidderCode}},{key:"hb_adid",val:function(e){return e.adId}},{key:"hb_pb",val:function(n){return e===N.GRANULARITY_OPTIONS.AUTO?n.pbAg:e===N.GRANULARITY_OPTIONS.DENSE?n.pbDg:e===N.GRANULARITY_OPTIONS.LOW?n.pbLg:e===N.GRANULARITY_OPTIONS.MEDIUM?n.pbMg:e===N.GRANULARITY_OPTIONS.HIGH?n.pbHg:e===N.GRANULARITY_OPTIONS.CUSTOM?n.pbCg:void 0}},{key:"hb_size",val:function(e){return e.size}},{key:"hb_deal",val:function(e){return e.dealId}}]),n[N.JSON_MAPPING.BD_SETTING_STANDARD]}var T=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},A=(function(){function e(e,n){var t=[],r=!0,i=!1,o=void 0;try{for(var a,s=e[Symbol.iterator]();!(r=(a=s.next()).done)&&(t.push(a.value),!n||t.length!==n);r=!0);}catch(e){i=!0,o=e}finally{try{!r&&s.return&&s.return()}finally{if(i)throw o}}return t}return function(n,t){if(Array.isArray(n))return n;if(Symbol.iterator in Object(n))return e(n,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}})(),_=t(0),I=t(28),w=t(15),C=t(29),j=t(48),O=t(17),B=t(9),U=t(49),N=t(4),P=N.EVENTS.AUCTION_END,R=t(0),k=t(11),D={byAdUnit:[],all:[],oneTime:null,timer:!1},x={};n.getTimedOutBidders=function(){return pbjs._bidsRequested.map(i).filter(_.uniques).filter((function(e){return pbjs._bidsReceived.map(o).filter(_.uniques).indexOf(e)<0}))},n.bidsBackAll=function(){return d()},n.addBidResponse=(0,U.createHook)("asyncSeries",(function(e,n){u(n,e)&&(f(n,e),"video"===n.mediaType?g(n):(p(n),l(n)))})),n.getKeyValueTargetingPairs=function(){return b.apply(void 0,arguments)},n.registerDefaultBidderSetting=function(e,n){x[e]=n},n.executeCallback=function(e){if(!e&&D.timer&&clearTimeout(D.timer),!0!==D.all.called&&(m(D.all),D.all.called=!0,e)){var t=n.getTimedOutBidders();t.length&&k.emit(N.EVENTS.BID_TIMEOUT,t)}if(D.oneTime){k.emit(P);try{m([D.oneTime])}catch(e){R.logError("Error executing bidsBackHandler",null,e)}finally{D.oneTime=null,D.timer=!1,pbjs.clearAuction()}}},n.externalCallbackReset=function(){D.all.called=!1},n.addOneTimeCallback=function(e,n){D.oneTime=e,D.timer=n},n.addCallback=function(e,n,t){n.id=e,N.CB.TYPE.ALL_BIDS_BACK===t?D.all.push(n):N.CB.TYPE.AD_UNIT_BIDS_BACK===t&&D.byAdUnit.push(n)},k.on(N.EVENTS.BID_ADJUSTMENT,(function(e){S(e)})),n.adjustBids=function(){return S.apply(void 0,arguments)},n.getStandardBidderAdServerTargeting=function(){return E()[N.JSON_MAPPING.ADSERVER_TARGETING]}},20:function(e,n){e.exports=function(e){return"object"==typeof e?null!==e:"function"==typeof e}},21:function(e,n,t){"use strict";function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e){return"string"==typeof e?[e]:b.isArray(e)?e:pbjs._adUnitCodes||[]}function o(e){var n=y.getWinningBids(e),t=a();return n=n.map((function(e){return r({},e.adUnitCode,Object.keys(e.adserverTargeting).filter((function(n){return void 0===e.sendStandardTargeting||e.sendStandardTargeting||-1===t.indexOf(n)})).map((function(n){return r({},n.substring(0,20),[e.adserverTargeting[n]])})))}))}function a(){return g.getStandardBidderAdServerTargeting().map((function(e){return e.key})).concat(v.TARGETING_KEYS).filter(f.uniques)}function s(e){var n=a();return pbjs._bidsReceived.filter(f.adUnitsFilter.bind(this,e)).map((function(e){if(e.alwaysUseBid)return r({},e.adUnitCode,Object.keys(e.adserverTargeting).map((function(t){if(!(n.indexOf(t)>-1))return r({},t.substring(0,20),[e.adserverTargeting[t]])})).filter((function(e){return e})))})).filter((function(e){return e}))}function d(e){var n=v.TARGETING_KEYS.concat(p.NATIVE_TARGETING_KEYS),t=[],i=(0,f.groupBy)(pbjs._bidsReceived,"adUnitCode");return Object.keys(i).forEach((function(e){var n=(0,f.groupBy)(i[e],"bidderCode");Object.keys(n).forEach((function(e){return t.push(n[e].reduce(f.getHighestCpm,c()))}))})),t.map((function(e){if(e.adserverTargeting)return r({},e.adUnitCode,u(e,n.filter((function(n){return void 0!==e.adserverTargeting[n]}))))})).filter((function(e){return e}))}function u(e,n){return n.map((function(n){return r({},(n+"_"+e.bidderCode).substring(0,20),[e.adserverTargeting[n]])}))}function c(e){return{adUnitCode:e,cpm:0,adserverTargeting:{},timeToRespond:0}}var f=t(0),l=t(9),p=t(15),g=t(2),b=t(0),v=t(4),y=n,m=[];y.resetPresetTargeting=function(e){if((0,f.isGptPubadsDefined)()){var n=i(e),t=pbjs.adUnits.filter((function(e){return n.includes(e.code)}));window.googletag.pubads().getSlots().forEach((function(e){m.forEach((function(n){t.forEach((function(t){t.code!==e.getAdUnitPath()&&t.code!==e.getSlotElementId()||e.setTargeting(n,null)}))}))}))}},y.getAllTargeting=function(e){var n=i(e),t=o(n).concat(s(n)).concat(l.config.getConfig("enableSendAllBids")?d():[]);return t.map((function(e){Object.keys(e).map((function(n){e[n].map((function(e){-1===m.indexOf(Object.keys(e)[0])&&(m=Object.keys(e).concat(m))}))}))})),t},y.setTargeting=function(e){window.googletag.pubads().getSlots().forEach((function(n){e.filter((function(e){return Object.keys(e)[0]===n.getAdUnitPath()||Object.keys(e)[0]===n.getSlotElementId()})).forEach((function(e){return e[Object.keys(e)[0]].forEach((function(e){e[Object.keys(e)[0]].map((function(t){return b.logMessage("Attempting to set key value for slot: "+n.getSlotElementId()+" key: "+Object.keys(e)[0]+" value: "+t),t})).forEach((function(t){n.setTargeting(Object.keys(e)[0],t)}))}))}))}))},y.getWinningBids=function(e){var n=i(e);return pbjs._bidsReceived.filter((function(e){return n.includes(e.adUnitCode)})).filter((function(e){return e.cpm>0})).map((function(e){return e.adUnitCode})).filter(f.uniques).map((function(e){return pbjs._bidsReceived.filter((function(n){return n.adUnitCode===e?n:null})).reduce(f.getHighestCpm,c(e))}))},y.setTargetingForAst=function(){var e=pbjs.getAdserverTargeting();Object.keys(e).forEach((function(n){return Object.keys(e[n]).forEach((function(t){if(b.logMessage("Attempting to set targeting for targetId: "+n+" key: "+t+" value: "+e[n][t]),b.isStr(e[n][t])||b.isArray(e[n][t])){var r={};r["hb_adid"===t.substring(0,"hb_adid".length)?t.toUpperCase():t]=e[n][t],window.apntag.setKeywords(n,r)}}))}))},y.isApntagDefined=function(){if(window.apntag&&b.isFn(window.apntag.setKeywords))return!0}},22:function(e,n,t){var r=t(344),i=t(349);e.exports=t(23)?function(e,n,t){return r.f(e,n,i(1,t))}:function(e,n,t){return e[n]=t,e}},23:function(e,n,t){e.exports=!t(24)((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},24:function(e,n){e.exports=function(e){try{return!!e()}catch(e){return!0}}},25:function(e,n){var t=0,r=Math.random();e.exports=function(e){return"Symbol(".concat(void 0===e?"":e,")_",(++t+r).toString(36))}},26:function(e,n,t){var r=t(35);e.exports=Object("z").propertyIsEnumerable(0)?Object:function(e){return"String"==r(e)?e.split(""):Object(e)}},27:function(e,n,t){var r=t(40)("unscopables"),i=Array.prototype;void 0==i[r]&&t(22)(i,r,{}),e.exports=function(e){i[r][e]=!0}},28:function(e,n,t){"use strict";function r(e,n,t){var r="";if(!i(n))return r;var a=n.buckets.reduce((function(e,n){return e.max>n.max?e:n}),{max:0}),d=n.buckets.find((function(n){if(e>a.max*t){var i=n.precision;void 0===i&&(i=s),r=(n.max*t).toFixed(i)}else if(e<=n.max*t&&e>=n.min*t)return n}));return d&&(r=o(e,d.increment,d.precision,t)),r}function i(e){if(a.isEmpty(e)||!e.buckets||!Array.isArray(e.buckets))return!1;var n=!0;return e.buckets.forEach((function(e){void 0!==e.min&&e.max&&e.increment||(n=!1)})),n}function o(e,n,t,r){void 0===t&&(t=s);var i=1/(n*r);return(Math.floor(e*i)/i).toFixed(t)}Object.defineProperty(n,"__esModule",{value:!0});var a=t(0),s=2,d={buckets:[{min:0,max:5,increment:.5}]},u={buckets:[{min:0,max:20,increment:.1}]},c={buckets:[{min:0,max:20,increment:.01}]},f={buckets:[{min:0,max:3,increment:.01},{min:3,max:8,increment:.05},{min:8,max:20,increment:.5}]},l={buckets:[{min:0,max:5,increment:.05},{min:5,max:10,increment:.1},{min:10,max:20,increment:.5}]};n.getPriceBucketString=function(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,i=parseFloat(e);return isNaN(i)&&(i=""),{low:""===i?"":r(e,d,t),med:""===i?"":r(e,u,t),high:""===i?"":r(e,c,t),auto:""===i?"":r(e,l,t),dense:""===i?"":r(e,f,t),custom:""===i?"":r(e,n,t)}},n.isValidPriceConfig=i},29:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.hasNonVideoBidder=n.videoBidder=n.videoAdUnit=void 0,n.isValidVideoBid=function(e){var n=(0,i.getBidRequest)(e.adId),t=n&&(0,i.deepAccess)(n,"mediaTypes.video"),r=t&&(0,i.deepAccess)(t,"context");return!n||t&&r!==a?o.config.getConfig("usePrebidCache")||!e.vastXml||e.vastUrl?!(!e.vastUrl&&!e.vastXml):((0,i.logError)("\n        This bid contains only vastXml and will not work when prebid-cache is disabled.\n        Try enabling prebid-cache with pbjs.setConfig({ usePrebidCache: true });\n      "),!1):r!==a||!(!e.renderer&&!n.renderer)};var r=t(1),i=t(0),o=t(9),a="outstream",s=(n.videoAdUnit=function(e){var n="video"===e.mediaType,t=(0,i.deepAccess)(e,"mediaTypes.video");return n||t},n.videoBidder=function(e){return r.videoAdapters.includes(e.bidder)});n.hasNonVideoBidder=function(e){return e.bids.filter((function(e){return!s(e)})).length}},3:function(e,n,t){"use strict";function r(e,n){var t=n&&n.bidId||i.getUniqueIdentifierStr(),r=e||0;this.bidderCode=n&&n.bidder||"",this.width=0,this.height=0,this.statusMessage=(function(){switch(r){case 0:return"Pending";case 1:return"Bid available";case 2:return"Bid returned empty or error response";case 3:return"Bid timed out"}})(),this.adId=t,this.mediaType="banner",this.getStatusCode=function(){return r},this.getSize=function(){return this.width+"x"+this.height}}var i=t(0);n.createBid=function(e,n){return new r(e,n)}},30:function(e,n){var t;t=(function(){return this})();try{t=t||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(t=window)}e.exports=t},31:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.getGlobal=function(){return window.pbjs},window.pbjs=window.pbjs||{},window.pbjs.cmd=window.pbjs.cmd||[],window.pbjs.que=window.pbjs.que||[]},32:function(e,n){var t={}.hasOwnProperty;e.exports=function(e,n){return t.call(e,n)}},33:function(e,n,t){var r=t(351);e.exports=function(e,n,t){if(r(e),void 0===n)return e;switch(t){case 1:return function(t){return e.call(n,t)};case 2:return function(t,r){return e.call(n,t,r)};case 3:return function(t,r,i){return e.call(n,t,r,i)}}return function(){return e.apply(n,arguments)}}},339:function(e,n,t){e.exports=t(340)},34:function(e,n,t){var r=t(33),i=t(26),o=t(36),a=t(38),s=t(352);e.exports=function(e,n){var t=1==e,d=2==e,u=3==e,c=4==e,f=6==e,l=5==e||f,p=n||s;return function(n,s,g){for(var b,v,y=o(n),m=i(y),h=r(s,g,3),S=a(m.length),E=0,T=t?p(n,S):d?p(n,0):void 0;S>E;E++)if((l||E in m)&&(b=m[E],v=h(b,E,y),e))if(t)T[E]=v;else if(v)switch(e){case 3:return!0;case 5:return b;case 6:return E;case 2:T.push(b)}else if(c)return!1;return f?-1:u||c?c:T}}},340:function(e,n,t){"use strict";function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(){h._bidsRequested=[],h._bidsReceived=h._bidsReceived.filter((function(e){return!h._adUnitCodes.includes(e.adUnitCode)}))}function o(e,n,t){e.defaultView&&e.defaultView.frameElement&&(e.defaultView.frameElement.width=n,e.defaultView.frameElement.height=t)}function a(e){e.forEach((function(e){if(void 0===e.called)try{e.call(),e.called=!0}catch(e){E.logError("Error processing command :","prebid.js",e)}}))}var s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},d=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},u=t(31),c=t(0),f=t(29),l=t(15);t(341);var p=t(12),g=t(369),b=t(18),v=t(5),y=t(7),m=t(9),h=(0,u.getGlobal)(),S=t(4),E=t(0),T=t(2),A=t(1),_=t(3),I=t(11),w=t(370),C=t(21),j=b.userSync.syncUsers,O=b.userSync.triggerUserSyncs,B=S.EVENTS.BID_WON,U=S.EVENTS.SET_TARGETING,N=S.EVENTS.ADD_AD_UNITS,P=!1,R=[],k={bidWon:function(e){var n=h._bidsRequested.map((function(e){return e.bids.map((function(e){return e.placementCode}))})).reduce(c.flatten).filter(c.uniques);{if(E.contains(n,e))return!0;E.logError('The "'+e+'" placement is not defined.')}}};h._bidsRequested=[],h._bidsReceived=[],h._adUnitCodes=[],h._winningBids=[],h._adsReceived=[],h.bidderSettings=h.bidderSettings||{},h.bidderTimeout=h.bidderTimeout,h.cbTimeout=h.cbTimeout||200,h.timeoutBuffer=200,h.logging=h.logging,h.publisherDomain=h.publisherDomain,h.libLoaded=!0,h.version="v0.34.1",E.logInfo("Prebid.js v0.34.1 loaded"),h.adUnits=h.adUnits||[],h.triggerUserSyncs=O,h.getAdserverTargetingForAdUnitCodeStr=function(e){if(E.logInfo("Invoking pbjs.getAdserverTargetingForAdUnitCodeStr",arguments),e){var n=h.getAdserverTargetingForAdUnitCode(e);return E.transformAdServerTargetingObj(n)}E.logMessage("Need to call getAdserverTargetingForAdUnitCodeStr with adunitCode")},h.getAdserverTargetingForAdUnitCode=function(e){return h.getAdserverTargeting(e)[e]},h.getAdserverTargeting=function(e){return E.logInfo("Invoking pbjs.getAdserverTargeting",arguments),C.getAllTargeting(e).map((function(e){return r({},Object.keys(e)[0],e[Object.keys(e)[0]].map((function(e){return r({},Object.keys(e)[0],e[Object.keys(e)[0]].join(", "))})).reduce((function(e,n){return d(n,e)}),{}))})).reduce((function(e,n){var t=Object.keys(n)[0];return e[t]=d({},e[t],n[t]),e}),{})},h.getBidResponses=function(){E.logInfo("Invoking pbjs.getBidResponses",arguments);var e=h._bidsReceived.filter(c.adUnitsFilter.bind(this,h._adUnitCodes)),n=e&&e.length&&e[e.length-1].requestId;return e.map((function(e){return e.adUnitCode})).filter(c.uniques).map((function(t){return e.filter((function(e){return e.requestId===n&&e.adUnitCode===t}))})).filter((function(e){return e&&e[0]&&e[0].adUnitCode})).map((function(e){return r({},e[0].adUnitCode,{bids:e})})).reduce((function(e,n){return d(e,n)}),{})},h.getBidResponsesForAdUnitCode=function(e){return{bids:h._bidsReceived.filter((function(n){return n.adUnitCode===e}))}},h.setTargetingForGPTAsync=function(e){if(E.logInfo("Invoking pbjs.setTargetingForGPTAsync",arguments),(0,c.isGptPubadsDefined)()){var n=C.getAllTargeting(e);C.resetPresetTargeting(e),C.setTargeting(n),I.emit(U)}else E.logError("window.googletag is not defined on the page")},h.setTargetingForAst=function(){E.logInfo("Invoking pbjs.setTargetingForAn",arguments),C.isApntagDefined()?(C.setTargetingForAst(),I.emit(U)):E.logError("window.apntag is not defined on the page")},h.allBidsAvailable=function(){return E.logWarn("pbjs.allBidsAvailable will be removed in Prebid 1.0. Alternative solution is in progress. See https://github.com/prebid/Prebid.js/issues/1087 for more details."),E.logInfo("Invoking pbjs.allBidsAvailable",arguments),T.bidsBackAll()},h.renderAd=function(e,n){if(E.logInfo("Invoking pbjs.renderAd",arguments),E.logMessage("Calling renderAd with adId :"+n),e&&n)try{var t=h._bidsReceived.find((function(e){return e.adId===n}));if(t){t.ad=E.replaceAuctionPrice(t.ad,t.cpm),t.adUrl=E.replaceAuctionPrice(t.adUrl,t.cpm),h._winningBids.push(t),I.emit(B,t);var r=t.height,i=t.width,a=t.ad,s=t.mediaType,d=t.adUrl,u=t.renderer;if(u&&u.url)u.render(t);else if(e===document&&!E.inIframe()||"video"===s)E.logError("Error trying to write ad. Ad render call ad id "+n+" was prevented from writing to the main document.");else if(a)e.write(a),e.close(),o(e,i,r);else if(d){var c=E.createInvisibleIframe();c.height=r,c.width=i,c.style.display="inline",c.style.overflow="hidden",c.src=d,E.insertElement(c,e,"body"),o(e,i,r)}else E.logError("Error trying to write ad. No ad for bid response id: "+n)}else E.logError("Error trying to write ad. Cannot find ad by given id : "+n)}catch(e){E.logError("Error trying to write ad Id :"+n+" to the page:"+e.message)}else E.logError("Error trying to write ad Id :"+n+" to the page. Missing document or adId")},h.removeAdUnit=function(e){if(E.logInfo("Invoking pbjs.removeAdUnit",arguments),e)for(var n=0;n<h.adUnits.length;n++)h.adUnits[n].code===e&&h.adUnits.splice(n,1)},h.clearAuction=function(){P=!1;var e=m.config.getConfig("userSync")||{};e.enableOverride||j(e.syncDelay),E.logMessage("Prebid auction cleared"),R.length&&R.shift()()},h.requestBids=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.bidsBackHandler,t=e.timeout,r=e.adUnits,o=e.adUnitCodes;I.emit("requestBids");var a=h.cbTimeout=t||m.config.getConfig("bidderTimeout");if(r=r||h.adUnits,E.logInfo("Invoking pbjs.requestBids",arguments),o&&o.length?r=r.filter((function(e){return o.includes(e.code)})):o=r&&r.map((function(e){return e.code})),r.filter(f.videoAdUnit).filter(f.hasNonVideoBidder).forEach((function(e){var n=e.bids.filter((function(e){return!(0,f.videoBidder)(e)})).map((function(e){return e.bidder}));E.logWarn(E.unsupportedBidderMessage(e,n)),e.bids=e.bids.filter(f.videoBidder)})),r.filter(l.nativeAdUnit).filter(l.hasNonNativeBidder).forEach((function(e){var n=e.bids.filter((function(e){return!(0,l.nativeBidder)(e)})).map((function(e){return e.bidder}));E.logWarn(E.unsupportedBidderMessage(e,n)),e.bids=e.bids.filter(l.nativeBidder)})),P)R.push((function(){h.requestBids({bidsBackHandler:n,timeout:a,adUnits:r,adUnitCodes:o})}));else{if(P=!0,h._adUnitCodes=o,T.externalCallbackReset(),i(),!r||0===r.length)return E.logMessage("No adUnits configured. No bids requested."),"function"==typeof n&&T.addOneTimeCallback(n,!1),void T.executeCallback();var s=T.executeCallback.bind(T,!0),d=setTimeout(s,a);(0,y.setAjaxTimeout)(a),"function"==typeof n&&T.addOneTimeCallback(n,d),A.callBids({adUnits:r,adUnitCodes:o,cbTimeout:a}),0===h._bidsRequested.length&&T.executeCallback()}},h.addAdUnits=function(e){E.logInfo("Invoking pbjs.addAdUnits",arguments),E.isArray(e)?(e.forEach((function(e){return e.transactionId=E.generateUUID()})),h.adUnits.push.apply(h.adUnits,e)):"object"===(void 0===e?"undefined":s(e))&&(e.transactionId=E.generateUUID(),h.adUnits.push(e)),I.emit(N)},h.onEvent=function(e,n,t){E.logInfo("Invoking pbjs.onEvent",arguments),E.isFn(n)?!t||k[e].call(null,t)?I.on(e,n,t):E.logError('The id provided is not valid for event "'+e+'" and no handler was set.'):E.logError('The event handler provided is not a function and was not set on event "'+e+'".')},h.offEvent=function(e,n,t){E.logInfo("Invoking pbjs.offEvent",arguments),t&&!k[e].call(null,t)||I.off(e,n,t)},h.addCallback=function(e,n){E.logWarn("pbjs.addCallback will be removed in Prebid 1.0. Please use onEvent instead"),E.logInfo("Invoking pbjs.addCallback",arguments);var t=null;return e&&n&&"function"==typeof n?(t=E.getUniqueIdentifierStr,T.addCallback(t,n,e),t):(E.logError("error registering callback. Check method signature"),t)},h.removeCallback=function(){return E.logWarn("pbjs.removeCallback will be removed in Prebid 1.0. Please use offEvent instead."),null},h.registerBidAdapter=function(e,n){E.logInfo("Invoking pbjs.registerBidAdapter",arguments);try{A.registerBidAdapter(e(),n)}catch(e){E.logError("Error registering bidder adapter : "+e.message)}},h.registerAnalyticsAdapter=function(e){E.logInfo("Invoking pbjs.registerAnalyticsAdapter",arguments);try{A.registerAnalyticsAdapter(e)}catch(e){E.logError("Error registering analytics adapter : "+e.message)}},h.bidsAvailableForAdapter=function(e){E.logInfo("Invoking pbjs.bidsAvailableForAdapter",arguments),h._bidsRequested.find((function(n){return n.bidderCode===e})).bids.map((function(n){return d(n,_.createBid(1),{bidderCode:e,adUnitCode:n.placementCode})})).map((function(e){return h._bidsReceived.push(e)}))},h.createBid=function(e){return E.logInfo("Invoking pbjs.createBid",arguments),_.createBid(e)},h.addBidResponse=function(e,n){E.logWarn("pbjs.addBidResponse will be removed in Prebid 1.0. Each bidder will be passed a reference to addBidResponse function in callBids as an argument. See https://github.com/prebid/Prebid.js/issues/1087 for more details."),E.logInfo("Invoking pbjs.addBidResponse",arguments),T.addBidResponse(e,n)},h.loadScript=function(e,n,t){E.logInfo("Invoking pbjs.loadScript",arguments),(0,v.loadScript)(e,n,t)},h.enableAnalytics=function(e){e&&!E.isEmpty(e)?(E.logInfo("Invoking pbjs.enableAnalytics for: ",e),A.enableAnalytics(e)):E.logError("pbjs.enableAnalytics should be called with option {}")},h.aliasBidder=function(e,n){E.logInfo("Invoking pbjs.aliasBidder",arguments),e&&n?A.aliasBidAdapter(e,n):E.logError("bidderCode and alias must be passed as arguments","pbjs.aliasBidder")},h.setPriceGranularity=function(e){E.logWarn("pbjs.setPriceGranularity will be removed in Prebid 1.0. Use pbjs.setConfig({ priceGranularity: <granularity> }) instead."),E.logInfo("Invoking pbjs.setPriceGranularity",arguments),m.config.setConfig({priceGranularity:e})},h.enableSendAllBids=function(){m.config.setConfig({enableSendAllBids:!0})},h.getAllWinningBids=function(){return h._winningBids},h.buildMasterVideoTagFromAdserverTag=function(e,n){E.logWarn("pbjs.buildMasterVideoTagFromAdserverTag will be removed in Prebid 1.0. Include the dfpVideoSupport module in your build, and use the pbjs.adservers.dfp.buildVideoAdUrl function instead"),E.logInfo("Invoking pbjs.buildMasterVideoTagFromAdserverTag",arguments);var t=(0,p.parse)(e);if(0===h._bidsReceived.length)return e;if("dfp"===n.adserver.toLowerCase()){var r=w.dfpAdserver(n,t);return r.verifyAdserverTag()||E.logError("Invalid adserverTag, required google params are missing in query string"),r.appendQueryParams(),(0,p.format)(r.urlComponents)}E.logError("Only DFP adserver is supported")},h.setBidderSequence=A.setBidderSequence,h.getHighestCpmBids=function(e){return C.getWinningBids(e)},h.setS2SConfig=function(e){if(E.contains(Object.keys(e),"accountId"))if(E.contains(Object.keys(e),"bidders")){var n=d({enabled:!1,endpoint:S.S2S.DEFAULT_ENDPOINT,timeout:1e3,maxBids:1,adapter:S.S2S.ADAPTER,syncEndpoint:S.S2S.SYNC_ENDPOINT,cookieSet:!0,bidders:[]},e);A.setS2SConfig(n)}else E.logError("bidders missing in Server to Server config");else E.logError("accountId missing in Server to Server config")},h.getConfig=m.config.getConfig,h.setConfig=m.config.setConfig,h.que.push((function(){return(0,g.listenMessagesFromCreative)()})),h.cmd.push=function(e){if("function"==typeof e)try{e.call()}catch(e){E.logError("Error processing command :",e.message,e.stack)}else E.logError("Commands written into pbjs.cmd.push must be wrapped in a function")},h.que.push=h.cmd.push,h.processQueue=function(){a(h.que),a(h.cmd)}},341:function(e,n,t){"use strict";t(342),t(355),t(357),t(360),Number.isInteger=Number.isInteger||function(e){return"number"==typeof e&&isFinite(e)&&Math.floor(e)===e}},342:function(e,n,t){t(343),e.exports=t(14).Array.find},343:function(e,n,t){"use strict";var r=t(19),i=t(34)(5),o=!0;"find"in[]&&Array(1).find((function(){o=!1})),r(r.P+r.F*o,"Array",{find:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}}),t(27)("find")},344:function(e,n,t){var r=t(345),i=t(346),o=t(348),a=Object.defineProperty;n.f=t(23)?Object.defineProperty:function(e,n,t){if(r(e),n=o(n,!0),r(t),i)try{return a(e,n,t)}catch(e){}if("get"in t||"set"in t)throw TypeError("Accessors not supported!");return"value"in t&&(e[n]=t.value),e}},345:function(e,n,t){var r=t(20);e.exports=function(e){if(!r(e))throw TypeError(e+" is not an object!");return e}},346:function(e,n,t){e.exports=!t(23)&&!t(24)((function(){return 7!=Object.defineProperty(t(347)("div"),"a",{get:function(){return 7}}).a}))},347:function(e,n,t){var r=t(20),i=t(16).document,o=r(i)&&r(i.createElement);e.exports=function(e){return o?i.createElement(e):{}}},348:function(e,n,t){var r=t(20);e.exports=function(e,n){if(!r(e))return e;var t,i;if(n&&"function"==typeof(t=e.toString)&&!r(i=t.call(e)))return i;if("function"==typeof(t=e.valueOf)&&!r(i=t.call(e)))return i;if(!n&&"function"==typeof(t=e.toString)&&!r(i=t.call(e)))return i;throw TypeError("Can't convert object to primitive value")}},349:function(e,n){e.exports=function(e,n){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:n}}},35:function(e,n){var t={}.toString;e.exports=function(e){return t.call(e).slice(8,-1)}},350:function(e,n,t){var r=t(16),i=t(22),o=t(32),a=t(25)("src"),s=Function.toString,d=(""+s).split("toString");t(14).inspectSource=function(e){return s.call(e)},(e.exports=function(e,n,t,s){var u="function"==typeof t;u&&(o(t,"name")||i(t,"name",n)),e[n]!==t&&(u&&(o(t,a)||i(t,a,e[n]?""+e[n]:d.join(String(n)))),e===r?e[n]=t:s?e[n]?e[n]=t:i(e,n,t):(delete e[n],i(e,n,t)))})(Function.prototype,"toString",(function(){return"function"==typeof this&&this[a]||s.call(this)}))},351:function(e,n){e.exports=function(e){if("function"!=typeof e)throw TypeError(e+" is not a function!");return e}},352:function(e,n,t){var r=t(353);e.exports=function(e,n){return new(r(e))(n)}},353:function(e,n,t){var r=t(20),i=t(354),o=t(40)("species");e.exports=function(e){var n;return i(e)&&("function"!=typeof(n=e.constructor)||n!==Array&&!i(n.prototype)||(n=void 0),r(n)&&null===(n=n[o])&&(n=void 0)),void 0===n?Array:n}},354:function(e,n,t){var r=t(35);e.exports=Array.isArray||function(e){return"Array"==r(e)}},355:function(e,n,t){t(356),e.exports=t(14).Array.findIndex},356:function(e,n,t){"use strict";var r=t(19),i=t(34)(6),o="findIndex",a=!0;o in[]&&Array(1)[o]((function(){a=!1})),r(r.P+r.F*a,"Array",{findIndex:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}}),t(27)(o)},357:function(e,n,t){t(358),e.exports=t(14).Array.includes},358:function(e,n,t){"use strict";var r=t(19),i=t(42)(!0);r(r.P,"Array",{includes:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}}),t(27)("includes")},359:function(e,n,t){var r=t(39),i=Math.max,o=Math.min;e.exports=function(e,n){return(e=r(e))<0?i(e+n,0):o(e,n)}},36:function(e,n,t){var r=t(37);e.exports=function(e){return Object(r(e))}},360:function(e,n,t){t(361),e.exports=t(14).Object.assign},361:function(e,n,t){var r=t(19);r(r.S+r.F,"Object",{assign:t(362)})},362:function(e,n,t){"use strict";var r=t(363),i=t(367),o=t(368),a=t(36),s=t(26),d=Object.assign;e.exports=!d||t(24)((function(){var e={},n={},t=Symbol(),r="abcdefghijklmnopqrst";return e[t]=7,r.split("").forEach((function(e){n[e]=e})),7!=d({},e)[t]||Object.keys(d({},n)).join("")!=r}))?function(e,n){for(var t=a(e),d=arguments.length,u=1,c=i.f,f=o.f;d>u;)for(var l,p=s(arguments[u++]),g=c?r(p).concat(c(p)):r(p),b=g.length,v=0;b>v;)f.call(p,l=g[v++])&&(t[l]=p[l]);return t}:d},363:function(e,n,t){var r=t(364),i=t(366);e.exports=Object.keys||function(e){return r(e,i)}},364:function(e,n,t){var r=t(32),i=t(43),o=t(42)(!1),a=t(365)("IE_PROTO");e.exports=function(e,n){var t,s=i(e),d=0,u=[];for(t in s)t!=a&&r(s,t)&&u.push(t);for(;n.length>d;)r(s,t=n[d++])&&(~o(u,t)||u.push(t));return u}},365:function(e,n,t){var r=t(41)("keys"),i=t(25);e.exports=function(e){return r[e]||(r[e]=i(e))}},366:function(e,n){e.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},367:function(e,n){n.f=Object.getOwnPropertySymbols},368:function(e,n){n.f={}.propertyIsEnumerable},369:function(e,n,t){"use strict";function r(e){var n=e.message?"message":"data",t={};try{t=JSON.parse(e[n])}catch(e){return}if(t.adId){var r=pbjs._bidsReceived.find((function(e){return e.adId===t.adId}));"Prebid Request"===t.message&&(i(r,t.adServerDomain,e.source),pbjs._winningBids.push(r),a.default.emit(d,r)),"Prebid Native"===t.message&&((0,s.fireNativeTrackers)(t,r),pbjs._winningBids.push(r),a.default.emit(d,r))}}function i(e,n,t){var r=e.adId,i=e.ad,a=e.adUrl,s=e.width,d=e.height;r&&(o(e),t.postMessage(JSON.stringify({message:"Prebid Response",ad:i,adUrl:a,adId:r,width:s,height:d}),n))}function o(e){var n=e.adUnitCode,t=e.width,r=e.height,i=document.getElementById(window.googletag.pubads().getSlots().find((function(e){return e.getAdUnitPath()===n||e.getSlotElementId()===n})).getSlotElementId()).querySelector("iframe");i.width=""+t,i.height=""+r}Object.defineProperty(n,"__esModule",{value:!0}),n.listenMessagesFromCreative=function(){addEventListener("message",r,!1)};var a=(function(e){return e&&e.__esModule?e:{default:e}})(t(11)),s=t(15),d=t(4).EVENTS.BID_WON},37:function(e,n){e.exports=function(e){if(void 0==e)throw TypeError("Can't call method on  "+e);return e}},370:function(e,n,t){"use strict";var r=t(12),i=t(21),o=function(e){this.name=e.adserver,this.code=e.code,this.getWinningBidByCode=function(){return(0,i.getWinningBids)(this.code)[0]}};n.dfpAdserver=function(e,n){var t=new o(e);t.urlComponents=n;var i={env:"vp",gdfp_req:"1",impl:"s",unviewed_position_start:"1"},a=["output","iu","sz","url","correlator","description_url","hl"],s=function(e){return encodeURIComponent((0,r.formatQS)(e))};return t.appendQueryParams=function(){var e=t.getWinningBidByCode();e&&(this.urlComponents.search.description_url=encodeURIComponent(e.vastUrl),this.urlComponents.search.cust_params=s(e.adserverTargeting),this.urlComponents.search.correlator=Date.now())},t.verifyAdserverTag=function(){for(var e in i)if(!this.urlComponents.search.hasOwnProperty(e)||this.urlComponents.search[e]!==i[e])return!1;for(var n in a)if(!this.urlComponents.search.hasOwnProperty(a[n]))return!1;return!0},t}},38:function(e,n,t){var r=t(39),i=Math.min;e.exports=function(e){return e>0?i(r(e),9007199254740991):0}},39:function(e,n){var t=Math.ceil,r=Math.floor;e.exports=function(e){return isNaN(e=+e)?0:(e>0?r:t)(e)}},4:function(e,n){e.exports={JSON_MAPPING:{PL_CODE:"code",PL_SIZE:"sizes",PL_BIDS:"bids",BD_BIDDER:"bidder",BD_ID:"paramsd",BD_PL_ID:"placementId",ADSERVER_TARGETING:"adserverTargeting",BD_SETTING_STANDARD:"standard"},REPO_AND_VERSION:"prebid_prebid_0.34.1",DEBUG_MODE:"pbjs_debug",STATUS:{GOOD:1,NO_BID:2},CB:{TYPE:{ALL_BIDS_BACK:"allRequestedBidsBack",AD_UNIT_BIDS_BACK:"adUnitBidsBack",BID_WON:"bidWon",REQUEST_BIDS:"requestBids"}},EVENTS:{AUCTION_INIT:"auctionInit",AUCTION_END:"auctionEnd",BID_ADJUSTMENT:"bidAdjustment",BID_TIMEOUT:"bidTimeout",BID_REQUESTED:"bidRequested",BID_RESPONSE:"bidResponse",BID_WON:"bidWon",SET_TARGETING:"setTargeting",REQUEST_BIDS:"requestBids",ADD_AD_UNITS:"addAdUnits"},EVENT_ID_PATHS:{bidWon:"adUnitCode"},GRANULARITY_OPTIONS:{LOW:"low",MEDIUM:"medium",HIGH:"high",AUTO:"auto",DENSE:"dense",CUSTOM:"custom"},TARGETING_KEYS:["hb_bidder","hb_adid","hb_pb","hb_size","hb_deal"],S2S:{DEFAULT_ENDPOINT:"https://prebid.adnxs.com/pbs/v1/auction",SRC:"s2s",ADAPTER:"prebidServer",SYNC_ENDPOINT:"https://prebid.adnxs.com/pbs/v1/cookie_sync",SYNCED_BIDDERS_KEY:"pbjsSyncs"}}},40:function(e,n,t){var r=t(41)("wks"),i=t(25),o=t(16).Symbol,a="function"==typeof o;(e.exports=function(e){return r[e]||(r[e]=a&&o[e]||(a?o:i)("Symbol."+e))}).store=r},41:function(e,n,t){var r=t(16),i=r["__core-js_shared__"]||(r["__core-js_shared__"]={});e.exports=function(e){return i[e]||(i[e]={})}},42:function(e,n,t){var r=t(43),i=t(38),o=t(359);e.exports=function(e){return function(n,t,a){var s,d=r(n),u=i(d.length),c=o(a,u);if(e&&t!=t){for(;u>c;)if((s=d[c++])!=s)return!0}else for(;u>c;c++)if((e||c in d)&&d[c]===t)return e||c||0;return!e&&-1}}},43:function(e,n,t){var r=t(26),i=t(37);e.exports=function(e){return r(i(e))}},46:function(e,n){function t(e){var n=Array.isArray(e)?[]:{};for(var r in e){var i=e[r];n[r]=i&&"object"==typeof i?t(i):i}return n}e.exports=t},47:function(e,n,t){"use strict";function r(e){return!!(o.isArray(e)&&e.length>0)||(o.logInfo("No size mapping defined"),!1)}function i(e){var n=e||a||window,t=n.document;return n.innerWidth?n.innerWidth:t.body.clientWidth?t.body.clientWidth:t.documentElement.clientWidth?t.documentElement.clientWidth:0}Object.defineProperty(n,"__esModule",{value:!0}),n.setWindow=n.getScreenWidth=n.mapSizes=void 0;var o=(function(e){if(e&&e.__esModule)return e;var n={};if(null!=e)for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(n[t]=e[t]);return n.default=e,n})(t(0)),a=void 0;n.mapSizes=function(e){if(!r(e.sizeMapping))return e.sizes;var n=i();if(!n){var t=e.sizeMapping.reduce((function(e,n){return e.minWidth<n.minWidth?n:e}));return t.sizes&&t.sizes.length?t.sizes:e.sizes}var a="",s=e.sizeMapping.find((function(e){return n>=e.minWidth}));return s&&s.sizes&&s.sizes.length?(a=s.sizes,o.logMessage("AdUnit : "+e.code+" resized based on device width to : "+a)):o.logMessage("AdUnit : "+e.code+" not mapped to any sizes for device width. This request will be suppressed."),a},n.getScreenWidth=i,n.setWindow=function(e){a=e}},48:function(e,n,t){"use strict";function r(e){return'<VAST version="3.0">\n    <Ad>\n      <Wrapper>\n        <AdSystem>prebid.org wrapper</AdSystem>\n        <VASTAdTagURI><![CDATA['+e+"]]></VASTAdTagURI>\n        <Impression></Impression>\n        <Creatives></Creatives>\n      </Wrapper>\n    </Ad>\n  </VAST>"}function i(e){return{type:"xml",value:e.vastXml?e.vastXml:r(e.vastUrl)}}function o(e){return{success:function(n){var t=void 0;try{t=JSON.parse(n).responses}catch(n){return void e(n,[])}t?e(null,t):e(new Error("The cache server didn't respond with a responses property."),[])},error:function(n,t){e(new Error("Error storing video ad in the cache: "+n+": "+JSON.stringify(t)),[])}}}Object.defineProperty(n,"__esModule",{value:!0}),n.store=function(e,n){var t={puts:e.map(i)};(0,a.ajax)(s,o(n),JSON.stringify(t),{contentType:"text/plain",withCredentials:!0})},n.getCacheUrl=function(e){return s+"?uuid="+e};var a=t(7),s="https://prebid.adnxs.com/pbc/v1/cache"},49:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};n.createHook=function(e,n,t){var a=[{fn:n,priority:0}],s={sync:function(){for(var e=this,n=arguments.length,t=Array(n),r=0;r<n;r++)t[r]=arguments[r];a.forEach((function(n){n.fn.apply(e,t)}))},asyncSeries:function(){for(var e=this,n=arguments.length,t=Array(n),r=0;r<n;r++)t[r]=arguments[r];var o=0;return a[o].fn.apply(this,t.concat((function n(){for(var t=arguments.length,r=Array(t),s=0;s<t;s++)r[s]=arguments[s];var d=a[++o];if("object"===(void 0===d?"undefined":i(d))&&"function"==typeof d.fn)return d.fn.apply(e,r.concat(n))})))}};if(!s[e])throw"invalid hook type";var d={addHook:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;"function"==typeof e&&(a.push({fn:e,priority:n}),a.sort((function(e,n){return n.priority-e.priority})))},removeHook:function(e){a=a.filter((function(t){return t.fn===n||t.fn!==e}))}};return"string"==typeof t&&(o[t]=d),r((function(){for(var t=arguments.length,r=Array(t),i=0;i<t;i++)r[i]=arguments[i];return 0===a.length?n.apply(this,r):s[e].apply(this,r)}),d)};var o=n.hooks={}},5:function(e,n,t){"use strict";function r(e,n){var t=document.createElement("script");t.type="text/javascript",t.async=!0,n&&"function"==typeof n&&(t.readyState?t.onreadystatechange=function(){"loaded"!==t.readyState&&"complete"!==t.readyState||(t.onreadystatechange=null,n())}:t.onload=function(){n()}),t.src=e;var r=document.getElementsByTagName("head");(r=r.length?r:document.getElementsByTagName("body")).length&&(r=r[0]).insertBefore(t,r.firstChild)}var i=t(0),o={};n.loadScript=function(e,n,t){e?t?o[e]?n&&"function"==typeof n&&(o[e].loaded?n():o[e].callbacks.push(n)):(o[e]={loaded:!1,callbacks:[]},n&&"function"==typeof n&&o[e].callbacks.push(n),r(e,(function(){o[e].loaded=!0;try{for(var n=0;n<o[e].callbacks.length;n++)o[e].callbacks[n]()}catch(e){i.logError("Error executing callback","adloader.js:loadScript",e)}}))):r(e,n):i.logError("Error attempting to request empty URL","adloader.js:loadScript")}},6:function(e,n,t){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(e){function n(n){if(e.getUserSyncs){var t=e.getUserSyncs({iframeEnabled:u.config.getConfig("userSync.iframeEnabled"),pixelEnabled:u.config.getConfig("userSync.pixelEnabled")},n);t&&(Array.isArray(t)||(t=[t]),t.forEach((function(n){g.userSync.registerSync(n.type,e.code,n.url)})))}}function t(n){return!!e.isBidRequestValid(n)||((0,b.logWarn)("Invalid bid sent to bidder "+e.code+": "+JSON.stringify(n)),!1)}function r(e){var n=Object.keys(e);return v.every((function(e){return n.includes(e)}))}function i(){var n=l.default.createBid(p.STATUS.NO_BID);return n.code=e.code,n.bidderCode=e.code,n}return a(new s.default(e.code),{getSpec:function(){return Object.freeze(e)},registerSyncs:n,callBids:function(s){function d(e,n){m[e]=!0,g(e,n)}function u(){s.bids.map((function(e){return e.placementCode})).forEach((function(e){e&&!m[e]&&g(e,i())}))}function g(e,n){try{f.default.addBidResponse(e,n)}catch(n){(0,b.logError)("Error adding bid",e,n)}}function v(){u(),n(h)}function y(e){return e?"?"+("object"===(void 0===e?"undefined":o(e))?(0,b.parseQueryStringParameters)(e):e):""}if(Array.isArray(s.bids)){var m={},h=[],S=s.bids.filter(t);if(0!==S.length){var E={};S.forEach((function(e){E[e.bidId]=e,e.adUnitCode||(e.adUnitCode=e.placementCode)}));var T=e.buildRequests(S,s);if(T&&0!==T.length){Array.isArray(T)||(T=[T]);var A=(0,b.delayExecution)(v,T.length);T.forEach((function(n){function t(t,i){function o(n){if(r(n)){var t=E[n.requestId];if(t){var i=a(l.default.createBid(p.STATUS.GOOD,t),n);d(t.placementCode,i)}else(0,b.logWarn)("Bidder "+e.code+" made bid for unknown request ID: "+n.requestId+". Ignoring.")}else(0,b.logError)("Bidder "+e.code+" is missing required params. Check http://prebid.org/dev-docs/bidder-adapter-1.html for list of params.")}try{t=JSON.parse(t)}catch(e){}t={body:t,headers:{get:i.getResponseHeader.bind(i)}},h.push(t);var s=void 0;try{s=e.interpretResponse(t,n)}catch(n){return(0,b.logError)("Bidder "+e.code+" failed to interpret the server's response. Continuing without bids",null,n),void A()}s&&(s.forEach?s.forEach(o):o(s)),A()}function i(n){(0,b.logError)("Server call for "+e.code+" failed: "+n+". Continuing without bids."),A()}switch(n.method){case"GET":(0,c.ajax)(""+n.url+y(n.data),{success:t,error:i},void 0,a({method:"GET",withCredentials:!0},n.options));break;case"POST":(0,c.ajax)(n.url,{success:t,error:i},"string"==typeof n.data?n.data:JSON.stringify(n.data),a({method:"POST",contentType:"text/plain",withCredentials:!0},n.options));break;default:(0,b.logWarn)("Skipping invalid request from "+e.code+". Request type "+n.type+" must be GET or POST"),A()}}))}else v()}else v()}}})}Object.defineProperty(n,"__esModule",{value:!0});var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e};n.registerBidder=function(e){function n(e){var n=i(e);d.default.registerBidAdapter(n,e.code,t)}var t=Array.isArray(e.supportedMediaTypes)?{supportedMediaTypes:e.supportedMediaTypes}:void 0;n(e),Array.isArray(e.aliases)&&e.aliases.forEach((function(t){n(a({},e,{code:t}))}))},n.newBidder=i;var s=r(t(8)),d=r(t(1)),u=t(9),c=t(7),f=r(t(2)),l=r(t(3)),p=t(4),g=t(18),b=t(0),v=["requestId","cpm","ttl","creativeId","netRevenue","currency"]},7:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};n.setAjaxTimeout=function(e){d=e},n.ajax=function(e,n,t){var u=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};try{var c=void 0,f=!1,l=u.method||(t?"POST":"GET"),p="object"===(void 0===n?"undefined":i(n))?n:{success:function(){a.logMessage("xhr success")},error:function(e){a.logError("xhr error",null,e)}};if("function"==typeof n&&(p.success=n),window.XMLHttpRequest?void 0===(c=new window.XMLHttpRequest).responseType&&(f=!0):f=!0,f?((c=new window.XDomainRequest).onload=function(){p.success(c.responseText,c)},c.onerror=function(){p.error("error",c)},c.ontimeout=function(){p.error("timeout",c)},c.onprogress=function(){a.logMessage("xhr onprogress")}):c.onreadystatechange=function(){if(c.readyState===s){var e=c.status;e>=200&&e<300||304===e?p.success(c.responseText,c):p.error(c.statusText,c)}},"GET"===l&&t){var g=(0,o.parse)(e,u);r(g.search,t),e=(0,o.format)(g)}c.open(l,e),c.timeout=d,f||(u.withCredentials&&(c.withCredentials=!0),a._each(u.customHeaders,(function(e,n){c.setRequestHeader(n,e)})),u.preflight&&c.setRequestHeader("X-Requested-With","XMLHttpRequest"),c.setRequestHeader("Content-Type",u.contentType||"text/plain")),c.send("POST"===l&&t)}catch(e){a.logError("xhr construction",e)}};var o=t(12),a=t(0),s=4,d=3e3},8:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e){var n=e;return{callBids:function(){},setBidderCode:function(e){n=e},getBidderCode:function(){return n}}}},9:function(e,n,t){"use strict";function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(){function e(e){return Object.keys(g).find((function(n){return e===g[n]}))}function n(n){if(!n)return d.logError("Prebid Error: no value passed to `setPriceGranularity()`"),!1;if("string"==typeof n)e(n)||d.logWarn("Prebid Warning: setPriceGranularity was called with invalid setting, using `medium` as default.");else if("object"===(void 0===n?"undefined":a(n))&&!(0,s.isValidPriceConfig)(n))return d.logError("Invalid custom price value passed to `setPriceGranularity()`"),!1;return!0}function t(e,n){var t=n;"string"!=typeof e&&(t=e,e=b);{if("function"==typeof t)return v.push({topic:e,callback:t}),function(){v.splice(v.indexOf(n),1)};d.logError("listener must be a function")}}function i(e){var n=Object.keys(e);v.filter((function(e){return n.includes(e.topic)})).forEach((function(n){n.callback(r({},n.topic,e[n.topic]))})),v.filter((function(e){return e.topic===b})).forEach((function(n){return n.callback(e)}))}var v=[],y={},m={_debug:u,get debug(){return pbjs.logging||!1===pbjs.logging?pbjs.logging:this._debug},set debug(e){this._debug=e},_bidderTimeout:c,get bidderTimeout(){return pbjs.bidderTimeout||this._bidderTimeout},set bidderTimeout(e){this._bidderTimeout=e},_publisherDomain:f,get publisherDomain(){return pbjs.publisherDomain||this._publisherDomain},set publisherDomain(e){this._publisherDomain=e},_cookieSyncDelay:l,get cookieSyncDelay(){return pbjs.cookieSyncDelay||this._cookieSyncDelay},set cookieSyncDelay(e){this._cookieSyncDelay=e},_priceGranularity:g.MEDIUM,set priceGranularity(t){n(t)&&("string"==typeof t?this._priceGranularity=e(t)?t:g.MEDIUM:"object"===(void 0===t?"undefined":a(t))&&(this._customPriceBucket=t,this._priceGranularity=g.CUSTOM,d.logMessage("Using custom price granularity")))},get priceGranularity(){return this._priceGranularity},_customPriceBucket:{},get customPriceBucket(){return this._customPriceBucket},_sendAllBids:p,get enableSendAllBids(){return this._sendAllBids},set enableSendAllBids(e){this._sendAllBids=e},set bidderSequence(e){pbjs.setBidderSequence(e)},set s2sConfig(e){pbjs.setS2SConfig(e)}};return{getConfig:function(){if(arguments.length<=1&&"function"!=typeof(arguments.length<=0?void 0:arguments[0])){var e=arguments.length<=0?void 0:arguments[0];return e?d.deepAccess(m,e):m}return t.apply(void 0,arguments)},setConfig:function(e){if("object"===(void 0===e?"undefined":a(e))){var n={};Object.keys(e).forEach((function(t){var r=e[t];"object"===a(y[t])&&"object"===(void 0===r?"undefined":a(r))&&(r=o({},y[t],r)),n[t]=m[t]=r})),i(n)}else d.logError("setConfig options must be an object")},setDefaults:function(e){"object"===(void 0===y?"undefined":a(y))?(o(y,e),o(m,e)):d.logError("defaults must be an object")}}}Object.defineProperty(n,"__esModule",{value:!0}),n.config=void 0;var o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};n.newConfig=i;var s=t(28),d=t(0),u=!1,c=3e3,f=window.location.origin,l=100,p=!1,g={LOW:"low",MEDIUM:"medium",HIGH:"high",AUTO:"auto",DENSE:"dense",CUSTOM:"custom"},b="*";n.config=i()}});
pbjsChunk([45],{96:function(e,r,n){n(97),e.exports=n(98)},97:function(e,r,n){"use strict";function t(e,r){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(r)}}))}function i(e){for(var r=arguments.length,n=Array(r>1?r-1:0),t=1;t<r;t++)n[t-1]=arguments[t];return function(){for(var r=arguments.length,t=Array(r),i=0;i<r;i++)t[i]=arguments[i];var a=t[t.length-1]||{},o=[e[0]];return n.forEach((function(r,n){var i=Number.isInteger(r)?t[r]:a[r];o.push(i,e[n+1])})),o.join("")}}function a(){return"https:"===document.location.protocol}function o(e){var r=/(img|iframe)[\s\S]*?src\s*=\s*("|')(.*?)\2/gi,n=/\w*(?=\s)/,t=/src=("|')(.*?)\1/,i=[];if(e){var a=e.match(r);a&&a.forEach((function(e){var r=e.match(n)[0],a=e.match(t)[2];r&&r&&i.push({type:r===j.IMAGE.TAG?j.IMAGE.TYPE:j.IFRAME.TYPE,url:a})}))}return i}function s(e){var r=e.params,n=r.server,t=r.region||"us",i=void 0;return C.hasOwnProperty(t)||(y.logWarn("Unknown region '"+t+"' for AOL bidder."),t="us"),i=n||C[t],r.region=t,D({host:i,network:r.network,placement:parseInt(r.placement),pageid:r.pageId||0,sizeid:r.sizeId||0,alias:r.alias||y.getUniqueIdentifierStr(),bidfloor:d(r.bidFloor),keyValues:c(r.keyValues),misc:(new Date).getTime()})}function d(e){return void 0!==e?";bidfloor="+e.toString():""}function c(e){var r="";return y._each(e,(function(e,n){r+=";kv"+n+"="+encodeURIComponent(e)})),r}function u(e){return M({host:e.params.host||N})}function p(e){var r=e.params,n=r.dcn,t=r.pos,i=u(e);if(n&&t){var o="";a()&&(e.params.ext=e.params.ext||{},e.params.ext.secure=1),y._each(e.params.ext,(function(e,r){o+="&"+r+"="+encodeURIComponent(e)})),i+=w({dcn:n,pos:t,ext:o})}return i}function l(e,r){var n=void 0;try{n=e.seatbid[0].bid[0]}catch(e){return}var t=void 0;if(n.ext&&n.ext.encp)t=n.ext.encp;else if(null===(t=n.price)||isNaN(t))return void y.logError("Invalid price in bid response",P.AOL,bid);var i=n.adm;return e.ext&&e.ext.pixels&&T.config.getConfig("aol.userSyncOn")!==L.default.EVENTS.BID_RESPONSE&&(i+="<script>if(!parent.pbjs.aolGlobals.pixelsDropped){parent.pbjs.aolGlobals.pixelsDropped=true;"+e.ext.pixels.replace(/<\/?script( type=('|")text\/javascript('|")|)?>/g,"")+"}<\/script>"),{bidderCode:r.bidderCode,requestId:r.bidId,ad:i,cpm:t,width:n.w,height:n.h,creativeId:n.crid,pubapiId:e.id,currency:e.cur,dealId:n.dealid,netRevenue:!0,ttl:k}}function f(e){return e===P.AOL||e===P.ONEDISPLAY}function m(e){return e===P.AOL||e===P.ONEMOBILE}function b(e){if(m(e.bidder)&&e.params.id&&e.params.imp&&e.params.imp[0]){var r=e.params.imp[0];return r.id&&r.tagid&&(r.banner&&r.banner.w&&r.banner.h||r.video&&r.video.mimes&&r.video.minduration&&r.video.maxduration)}}function v(e){return m(e.bidder)&&e.params.dcn&&e.params.pos}function E(e){return f(e.bidder)&&e.params.placement&&e.params.network}function g(e){return v(e)||b(e)}function O(e){return v(e)?G.MOBILE.GET:b(e)?G.MOBILE.POST:E(e)?G.DISPLAY.GET:void 0}function h(e,r){var n=void 0;switch(e){case G.DISPLAY.GET:n={url:s(r),method:"GET"};break;case G.MOBILE.GET:n={url:p(r),method:"GET"};break;case G.MOBILE.POST:n={url:u(r),method:"POST",data:r.params,options:{contentType:"application/json",customHeaders:{"x-openrtb-version":"2.2"}}}}return n.bidderCode=r.bidder,n.bidId=r.bidId,n.userSyncOn=r.params.userSyncOn,n}Object.defineProperty(r,"__esModule",{value:!0}),r.spec=void 0;var I=t(["//","/pubapi/3.0/","/","/","/","/ADTECH;v=2;cmd=bid;cors=yes;alias=","","",";misc=",""],["//","/pubapi/3.0/","/","/","/","/ADTECH;v=2;cmd=bid;cors=yes;alias=","","",";misc=",""]),x=t(["//","/bidRequest?"],["//","/bidRequest?"]),A=t(["dcn=","&pos=","&cmd=bid",""],["dcn=","&pos=","&cmd=bid",""]),y=(function(e){if(e&&e.__esModule)return e;var r={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r.default=e,r})(n(0)),S=n(6),T=n(9),L=(function(e){return e&&e.__esModule?e:{default:e}})(n(4)),P={AOL:"aol",ONEMOBILE:"onemobile",ONEDISPLAY:"onedisplay"},G={DISPLAY:{GET:"display-get"},MOBILE:{GET:"mobile-get",POST:"mobile-post"}},j={IFRAME:{TAG:"iframe",TYPE:"iframe"},IMAGE:{TAG:"img",TYPE:"image"}},D=i(I,"host","network","placement","pageid","sizeid","alias","bidfloor","keyValues","misc"),M=i(x,"host"),w=i(A,"dcn","pos","ext"),C={us:"adserver-us.adtech.advertising.com",eu:"adserver-eu.adtech.advertising.com",as:"adserver-as.adtech.advertising.com"},N="hb.nexage.com",k=300;pbjs.aolGlobals={pixelsDropped:!1};var B=(function(){var e=!0;return function(){var r=pbjs.bidderSettings;e&&r&&r.aol&&"function"==typeof r.aol.bidCpmAdjustment&&(y.logWarn("bidCpmAdjustment is active for the AOL adapter. As of Prebid 0.14, AOL can bid in net – please contact your accounts team to enable."),e=!1)}})(),R=r.spec={code:P.AOL,aliases:[P.ONEMOBILE,P.ONEDISPLAY],isBidRequestValid:function(e){return E(e)||g(e)},buildRequests:function(e){return e.map((function(e){var r=O(e);if(r)return h(r,e)}))},interpretResponse:function(e,r){var n=e.body;if(B(),n){var t=l(n,r);if(t)return t}else y.logError("Empty bid response",r.bidderCode,n)},getUserSyncs:function(e,r){var n=r[0];return T.config.getConfig("aol.userSyncOn")===L.default.EVENTS.BID_RESPONSE&&!pbjs.aolGlobals.pixelsDropped&&n.ext&&n.ext.pixels?(pbjs.aolGlobals.pixelsDropped=!0,o(n.ext.pixels)):[]}};(0,S.registerBidder)(R)},98:function(e,r){}},[96]);
pbjsChunk([111],{104:function(e,r,a){e.exports=a(105)},105:function(e,r,a){"use strict";var t,d=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var a=arguments[r];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t])}return e},s=a(0),i=(function(e){return e&&e.__esModule?e:{default:e}})(a(1)),n=a(4),l=a(0),p=a(5),u=a(2),c=a(3),m=a(8).default;t=function(){function e(e,r){var a=l.getBidIdParameter("placementId",e.params),t=l.getBidIdParameter("memberId",e.params),s=l.getBidIdParameter("member",e.params),i=l.getBidIdParameter("invCode",e.params),n=l.getBidIdParameter("query",e.params),p=l.getBidIdParameter("referrer",e.params),u=l.getBidIdParameter("alt_referrer",e.params),c=l.getBidIdParameter("usePaymentRule",e.params),m="//ib.adnxs.com/jpt?";m=l.tryAppendQueryString(m,"callback","pbjs.handleAnCB"),m=l.tryAppendQueryString(m,"callback_uid",r),m=l.tryAppendQueryString(m,"psa","0"),m=l.tryAppendQueryString(m,"id",a),m=l.tryAppendQueryString(m,"use_pmt_rule",c),s?m=l.tryAppendQueryString(m,"member",s):t&&(m=l.tryAppendQueryString(m,"member",t),l.logMessage('appnexus.callBids: "memberId" will be deprecated soon. Please use "member" instead')),m=l.tryAppendQueryString(m,"code",i),m=l.tryAppendQueryString(m,"traffic_source_code",l.getBidIdParameter("trafficSourceCode",e.params));var o="",g=l.parseSizesInput(e.sizes),f=g.length;if(f>0&&(o="size="+g[0],f>1)){o+="&promo_sizes=";for(var y=1;y<f;y++)o+=g[y]+=",";o&&","===o.charAt(o.length-1)&&(o=o.slice(0,o.length-1))}o&&(m+=o+"&");var b=l.parseQueryStringParameters(n);b&&(m+=b);var B=d({},e.params);delete B.placementId,delete B.memberId,delete B.invCode,delete B.query,delete B.referrer,delete B.alt_referrer,delete B.member,delete B.usePaymentRule;var A=l.parseQueryStringParameters(B);return A&&(m+=A),""===p&&(p=l.getTopWindowUrl()),m=l.tryAppendQueryString(m,"referrer",p),(m=l.tryAppendQueryString(m,"alt_referrer",u)).lastIndexOf("&")===m.length-1&&(m=m.substring(0,m.length-1)),l.logMessage("jpt request built: "+m),e.startTime=(new Date).getTime(),m}var r=new m("appnexus"),a=!1;return r.callBids=function(r){for(var a=r.bids,t=0;t<a.length;t++){var d=a[t],s=d.bidId;p.loadScript(e(d,s))}},pbjs.handleAnCB=function(e){var r;if(e&&e.callback_uid){var t,d=e.callback_uid,i="",p=(0,s.getBidRequest)(d);p&&(r=p.bidder,i=p.placementCode,p.status=n.STATUS.GOOD),l.logMessage("JSONP callback function called for ad ID: "+d);var m=[];if(e.result&&e.result.cpm&&0!==e.result.cpm){t=parseInt(e.result.cpm,10),t/=1e4;var o=e.result.creative_id;(m=c.createBid(1,p)).creative_id=o,m.bidderCode=r,m.cpm=t,m.adUrl=e.result.ad,m.width=e.result.width,m.height=e.result.height,m.dealId=e.result.deal_id,u.addBidResponse(i,m)}else l.logMessage("No prebid response from AppNexus for placement code "+i),(m=c.createBid(2,p)).bidderCode=r,u.addBidResponse(i,m);if(!a){var g=l.createInvisibleIframe();g.src="//acdn.adnxs.com/ib/static/usersync/v3/async_usersync.html";try{document.body.appendChild(g)}catch(e){l.logError(e)}a=!0}}else l.logMessage("No prebid response for placement %%PLACEMENT%%")},d(this,{callBids:r.callBids,setBidderCode:r.setBidderCode,buildJPTCall:e})},i.default.registerBidAdapter(new t,"appnexus"),i.default.aliasBidAdapter("appnexus","brealtime"),i.default.aliasBidAdapter("appnexus","pagescience"),i.default.aliasBidAdapter("appnexus","defymedia"),i.default.aliasBidAdapter("appnexus","gourmetads"),i.default.aliasBidAdapter("appnexus","matomy"),i.default.aliasBidAdapter("appnexus","featureforward"),i.default.aliasBidAdapter("appnexus","oftmedia"),e.exports=t}},[104]);
pbjsChunk([102],{137:function(t,i,n){t.exports=n(138)},138:function(t,i,n){"use strict";var e=n(3),r=n(2),a=n(5),o=n(1),s=n(0),d=function(){function t(t){window.Criteo=window.Criteo||{},window.Criteo.events=window.Criteo.events||[];window.Criteo.events.push((function(){for(var i,n,e=t.bids||[],r=[],a=!1,c=0;c<e.length;c++){var p=e[c],u=s.parseSizesInput(p.sizes);r.push(new Criteo.PubTag.DirectBidding.DirectBiddingSlot(p.placementCode,p.params.zoneId,p.params.nativeCallback?p.params.nativeCallback:void 0,p.transactionId,u.map((function(t){var i=t.indexOf("x"),n=parseInt(t.substring(0,i)),e=parseInt(t.substring(i+1,t.length));return new Criteo.PubTag.DirectBidding.Size(n,e)})),p.params.publisherSubId)),i=p.params.networkId||i,void 0!==p.params.integrationMode&&(n="amp"==p.params.integrationMode.toLowerCase()?1:0),a|=void 0!==p.params.audit}var l=new Criteo.PubTag.DirectBidding.DirectBiddingEvent(w,new Criteo.PubTag.DirectBidding.DirectBiddingUrlBuilder(a),r,o(r),d(r),d(r),void 0,i,n,v);window.criteo_pubtag.push(l)}))}function i(t){try{return JSON.parse(t)}catch(t){return{}}}function n(t){return void 0===t.slots}function o(t){return function(e){var a=i(e);if(n(a))return d(t)();for(var o=0;o<t.length;o++){for(var s=null,c=0;c<a.slots.length;c++)if(a.slots[c]&&a.slots[c].impid===t[o].impId){s=a.slots.splice(c,1)[0];break}var u=p(s,t[o]);r.addBidResponse(t[o].impId,u)}}}function d(t){return function(){for(var i=0;i<t.length;i++)r.addBidResponse(t[i].impId,c())}}function c(){var t=e.createBid(2);return t.bidderCode=l,t}function p(t,i){var n=void 0;return t?((n=e.createBid(1)).bidderCode=l,n.cpm=t.cpm,i.nativeCallback&&t.native?"function"!=typeof i.nativeCallback?s.logError("Criteo bid: nativeCallback parameter is not a function"):(window.criteo_pubtag.native_slots=window.criteo_pubtag.native_slots||{},window.criteo_pubtag.native_slots[""+n.adId]={callback:i.nativeCallback,nativeResponse:t.native},n.ad='<script type="text/javascript">\n  let win = window;\n  for (const i=0; i<10; ++i) {\n    win = win.parent;\n    if (win.criteo_pubtag && win.criteo_pubtag.native_slots) {\n      let responseSlot = win.criteo_pubtag.native_slots["'+n.adId+'"];\n      responseSlot.callback(responseSlot.nativeResponse);\n      break;\n    }\n  }\n<\/script>'):(n.width=t.width,n.height=t.height,n.ad=t.creative)):n=c(),n}var u=("http:"===window.location.protocol?"http:":"https:")+"//static.criteo.net/js/ld/publishertag.js",l="criteo",w=125,v=1;return{callBids:function(i){!window.criteo_pubtag||window.criteo_pubtag instanceof Array?(t(i),a.loadScript(u,(function(){}),!0)):t(i)}}};o.registerBidAdapter(new d,"criteo"),t.exports=d}},[137]);
pbjsChunk([100],{144:function(e,i,d){e.exports=d(145)},145:function(e,i,d){"use strict";var s=d(3),t=d(2),r=d(5),n=function(){var e=this,i=window.location.protocol+"//prebid.districtm.ca/lib.js";return this.callBids=function(d){return window.hb_dmx_res?e.sendBids(d):r.loadScript(i,(function(){e.sendBids(d)})),d},this.handlerRes=function(e,i){var d=void 0;return parseFloat(e.result.cpm)>0?((d=s.createBid(1,i)).bidderCode=i.bidder,d.cpm=e.result.cpm,d.width=e.result.width,d.height=e.result.height,d.ad=e.result.banner,t.addBidResponse(i.placementCode,d)):((d=s.createBid(2,i)).bidderCode=i.bidder,t.addBidResponse(i.placementCode,d)),d},this.sendBids=function(e){for(var i=e.bids,d=0;d<i.length;d++)i[d].params.sizes=window.hb_dmx_res.auction.fixSize(i[d].sizes);return window.hb_dmx_res.auction.run(window.hb_dmx_res.ssp,i,this.handlerRes),i},{callBids:this.callBids,sendBids:this.sendBids,handlerRes:this.handlerRes}};d(1).registerBidAdapter(new n,"districtmDMX"),e.exports=n}},[144]);
pbjsChunk([91],{174:function(e,t,i){e.exports=i(175)},175:function(e,t,i){"use strict";function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t.default=e,t}function a(e){return e&&e.__esModule?e:{default:e}}var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r])}return e},o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n=a(i(8)),d=a(i(3)),u=a(i(2)),l=r(i(0)),p=i(4),f=r(i(12)),c=a(i(5)),g=a(i(1)),m="INDEXEXCHANGE",v="indexExchange",y={INDEX_DEBUG_MODE:{queryParam:"pbjs_ix_debug",mode:{sandbox:{topFrameLimit:10,queryValue:"sandbox",siteID:"999990"}}}},I={siteID:!0,playerType:!0,protocols:!0,maxduration:!0},h={minduration:0,startdelay:"preroll",linearity:"linear",mimes:[],allowVPAID:!0,apiList:[]},_={HTML5:!0,FLASH:!0},D={VAST2:[2,5],VAST3:[3,6]},x={FLASH:[1,2],HTML5:[2]},b={linear:1,nonlinear:2},q={preroll:0,midroll:-1,postroll:-2},R={preroll:"pr",midroll:"m",postroll:"po"},w={FLASH:["video/mp4","video/x-flv"],HTML5:["video/mp4","video/webm"]},T={FLASH:["application/x-shockwave-flash"],HTML5:["application/javascript"]},E="http://as.casalemedia.com/cygnus?v=8&fn=pbjs.handleCygnusResponse",S="https://as-sec.casalemedia.com/cygnus?v=8&fn=pbjs.handleCygnusResponse";window.cygnus_index_parse_res=function(e){try{if(e){if("object"!==("undefined"==typeof _IndexRequestData?"undefined":o(_IndexRequestData))||"object"!==o(_IndexRequestData.impIDToSlotID)||void 0===_IndexRequestData.impIDToSlotID[e.id])return;var t,i=1;"object"===o(_IndexRequestData.reqOptions)&&"object"===o(_IndexRequestData.reqOptions[e.id])&&("function"==typeof _IndexRequestData.reqOptions[e.id].callback&&(t=_IndexRequestData.reqOptions[e.id].callback),"number"==typeof _IndexRequestData.reqOptions[e.id].targetMode&&(i=_IndexRequestData.reqOptions[e.id].targetMode)),_IndexRequestData.lastRequestID=e.id,_IndexRequestData.targetIDToBid={},_IndexRequestData.targetIDToResp={},_IndexRequestData.targetIDToCreative={};for(var r=[],a=void 0===e.seatbid?0:e.seatbid.length,s=0;s<a;s++)for(var n=0;n<e.seatbid[s].bid.length;n++){var d=e.seatbid[s].bid[n];if("object"===o(d.ext)&&"string"==typeof d.ext.pricelevel&&void 0!==_IndexRequestData.impIDToSlotID[e.id][d.impid]){var u,l,p,f=_IndexRequestData.impIDToSlotID[e.id][d.impid];"string"==typeof d.ext.dealid?(u=1===i?f+d.ext.pricelevel:f+"_"+d.ext.dealid,l=f+"_"+d.ext.dealid,p="IPM_"):(u=f+d.ext.pricelevel,l=f+d.ext.pricelevel,p="IOM_"),void 0===_IndexRequestData.targetIDToBid[u]?_IndexRequestData.targetIDToBid[u]=[d.adm]:_IndexRequestData.targetIDToBid[u].push(d.adm),void 0===_IndexRequestData.targetIDToCreative[l]?_IndexRequestData.targetIDToCreative[l]=[d.adm]:_IndexRequestData.targetIDToCreative[l].push(d.adm);var c={};c.impressionID=d.impid,void 0!==d.ext.dealid&&(c.dealID=d.ext.dealid),c.bid=d.price,c.slotID=f,c.priceLevel=d.ext.pricelevel,c.target=p+u,_IndexRequestData.targetIDToResp[u]=c,r.push(c)}}"function"==typeof t&&(0===r.length?t(e.id):t(e.id,r))}}catch(e){}"function"==typeof window.cygnus_index_ready_state&&window.cygnus_index_ready_state()},window.index_render=function(e,t){try{var i=_IndexRequestData.targetIDToCreative[t].pop();if(null!=i)e.write(i);else{var r="http:"===l.getTopWindowLocation().protocol?"http://as.casalemedia.com":"https://as-sec.casalemedia.com";r+="/headerstats?type=RT&s="+cygnus_index_args.siteID+"&u="+encodeURIComponent(location.href)+"&r="+_IndexRequestData.lastRequestID,(new Image).src=r+"&blank="+t}}catch(e){}},window.headertag_render=function(e,t,i){for(var r=i,a=t.split(","),s=0;s<a.length;s++)if(a[s].split("_")[0]==r)return void index_render(e,a[s])},window.cygnus_index_args={};var C=[[728,90],[120,600],[300,250],[160,600],[336,280],[234,60],[300,600],[300,50],[320,50],[970,250],[300,1050],[970,90],[180,150]],A=function(){return O(y.INDEX_DEBUG_MODE.queryParam).toUpperCase()},O=function(e){for(var t=window,i="",r=0;r<y.INDEX_DEBUG_MODE.mode.sandbox.topFrameLimit&&t.parent!=t;r++){try{i=t.document.referrer}catch(e){}t=t.parent}var a=top===self?location.href:i,s="[\\?&]"+e+"=([^&#]*)",o=new RegExp(s).exec(a);return null===o?"":decodeURIComponent(o[1].replace(/\+/g," "))},N=function(){function e(e){var t=a[e];return"string"==typeof t?t:"\\u"+("0000"+e.charCodeAt(0).toString(16)).slice(-4)}function t(t){return r.lastIndex=0,r.test(t)?t.replace(r,e):t}function i(e,t,i){if(this.initialized=!1,"number"!=typeof e||e%1!=0||e<0)throw"Invalid Site ID";"number"==typeof(i=Number(i))&&i%1==0&&i>=0&&(this.timeoutDelay=i),this.siteID=e,this.impressions=[],this._parseFnName=void 0,this.sitePage=void 0;try{this.sitePage=l.getTopWindowUrl()}catch(e){}if(void 0!==this.sitePage&&""!==this.sitePage||(top===self?this.sitePage=location.href:this.sitePage=document.referrer),top===self?this.topframe=1:this.topframe=0,void 0!==t){if("function"!=typeof t)throw"Invalid jsonp target function";this._parseFnName="cygnus_index_args.parseFn"}void 0===_IndexRequestData.requestCounter?_IndexRequestData.requestCounter=Math.floor(256*Math.random()):_IndexRequestData.requestCounter=(_IndexRequestData.requestCounter+1)%256,this.requestID=String((new Date).getTime()%2592e3*256+_IndexRequestData.requestCounter+256),this.initialized=!0}window.cygnus_index_args.parseFn=cygnus_index_parse_res;var r=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,a={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"};i.prototype.serialize=function(){var e='{"id":"'+this.requestID+'","site":{"page":"'+t(this.sitePage)+'"';"string"==typeof document.referrer&&""!==document.referrer&&(e+=',"ref":"'+t(document.referrer)+'"'),e+='},"imp":[';for(var i=0;i<this.impressions.length;i++){var r=this.impressions[i],a=[];e+='{"id":"'+r.id+'", "banner":{"w":'+r.w+',"h":'+r.h+',"topframe":'+String(this.topframe)+"}","number"==typeof r.bidfloor&&(e+=',"bidfloor":'+r.bidfloor,"string"==typeof r.bidfloorcur&&(e+=',"bidfloorcur":"'+t(r.bidfloorcur)+'"')),"string"!=typeof r.slotID||r.slotID.match(/^\s*$/)||a.push('"sid":"'+t(r.slotID)+'"'),"number"==typeof r.siteID&&a.push('"siteID":'+r.siteID),a.length>0&&(e+=',"ext": {'+a.join()+"}"),i+1===this.impressions.length?e+="}":e+="},"}return e+="]}"},i.prototype.setPageOverride=function(e){return"string"==typeof e&&!e.match(/^\s*$/)&&(this.sitePage=e,!0)},i.prototype.addImpression=function(e,t,i,r,a,s){var o={id:String(this.impressions.length+1)};if("number"!=typeof e||e<=1)return null;if("number"!=typeof t||t<=1)return null;if(("string"==typeof a||"number"==typeof a)&&String(a).length<=50&&(o.slotID=String(a)),o.w=e,o.h=t,void 0!==i&&"number"!=typeof i)return null;if("number"==typeof i){if(i<0)return null;if(o.bidfloor=i,void 0!==r&&"string"!=typeof r)return null;o.bidfloorcur=r}if(void 0!==s){if(!("number"==typeof s&&s%1==0&&s>=0))return null;o.siteID=s}return this.impressions.push(o),o.id},i.prototype.buildRequest=function(){if(0!==this.impressions.length&&!0===this.initialized){var e,t=encodeURIComponent(this.serialize());A()==y.INDEX_DEBUG_MODE.mode.sandbox.queryValue.toUpperCase()?(this.siteID=y.INDEX_DEBUG_MODE.mode.sandbox.siteID,e="http:"===l.getTopWindowLocation().protocol?"http://sandbox.ht.indexexchange.com":"https://sandbox.ht.indexexchange.com",l.logMessage("IX DEBUG: Sandbox mode activated")):e="http:"===l.getTopWindowLocation().protocol?"http://as.casalemedia.com":"https://as-sec.casalemedia.com";var i=encodeURIComponent("0.34.1");return e+="/cygnus?v=7&fn=cygnus_index_parse_res&s="+this.siteID+"&r="+t+"&pid=pb"+i,"number"==typeof this.timeoutDelay&&this.timeoutDelay%1==0&&this.timeoutDelay>=0&&(e+="&t="+this.timeoutDelay),e}};try{if("undefined"==typeof cygnus_index_args||void 0===cygnus_index_args.siteID||void 0===cygnus_index_args.slots)return;var s=new i(cygnus_index_args.siteID,cygnus_index_args.parseFn,cygnus_index_args.timeout);cygnus_index_args.url&&"string"==typeof cygnus_index_args.url&&s.setPageOverride(cygnus_index_args.url),_IndexRequestData.impIDToSlotID[s.requestID]={},_IndexRequestData.reqOptions[s.requestID]={};for(var o,n,d=0;d<cygnus_index_args.slots.length;d++)o=cygnus_index_args.slots[d],(n=s.addImpression(o.width,o.height,o.bidfloor,o.bidfloorcur,o.id,o.siteID))&&(_IndexRequestData.impIDToSlotID[s.requestID][n]=String(o.id));return"number"==typeof cygnus_index_args.targetMode&&(_IndexRequestData.reqOptions[s.requestID].targetMode=cygnus_index_args.targetMode),"function"==typeof cygnus_index_args.callback&&(_IndexRequestData.reqOptions[s.requestID].callback=cygnus_index_args.callback),s.buildRequest()}catch(e){l.logError("Error calling index adapter",m,e)}},B=function(){function e(e){var t=d.default.createBid(2);return t.bidderCode=v,u.default.addBidResponse(e,t),t}function t(t){if(l.hasValidBidRequest(t.params,W,m)){var i=0;l.isArray(t.sizes[0])||(t.sizes=[t.sizes]);for(var r=0;r<t.sizes.length;r++){for(var s=!1,o=0;o<C.length;o++)if(t.sizes[r][0]==C[o][0]&&t.sizes[r][1]==C[o][1]){t.sizes[r][0]=Number(t.sizes[r][0]),t.sizes[r][1]=Number(t.sizes[r][1]),s=!0;break}if(s){var n=!1;if(t.params.size&&l.isArray(t.params.size)){if(t.sizes[r][0]!=t.params.size[0]||t.sizes[r][1]!=t.params.size[1]){e(t.placementCode);continue}n=!0}t.params.timeout&&void 0===cygnus_index_args.timeout&&(cygnus_index_args.timeout=t.params.timeout);var d=Number(t.params.siteID);if("number"!=typeof d||d%1!=0||d<=0)l.logMessage(m+" slot excluded from request due to invalid siteID"),e(t.placementCode);else if(d&&void 0===cygnus_index_args.siteID&&(cygnus_index_args.siteID=d),l.hasValidBidRequest(t.params,W,m)){$=t.placementCode;var u=t.params[W[0]];if("string"!=typeof u&&"number"!=typeof u){l.logError(m+" bid contains invalid slot ID from "+t.placementCode+". Discarding slot"),e(t.placementCode);continue}i++;var p={width:t.sizes[r][0],height:t.sizes[r][1]},f=n?String(u):u+"_"+i;if(X[f]=t,cygnus_index_args.slots=a({id:f,width:p.width,height:p.height,siteID:d||cygnus_index_args.siteID},cygnus_index_args.slots),t.params.tier2SiteID){var c=Number(t.params.tier2SiteID);if(void 0!==c&&!c)continue;cygnus_index_args.slots=a({id:"T1_"+f,width:p.width,height:p.height,siteID:c},cygnus_index_args.slots)}if(t.params.tier3SiteID){var g=Number(t.params.tier3SiteID);if(void 0!==g&&!g)continue;cygnus_index_args.slots=a({id:"T2_"+f,width:p.width,height:p.height,siteID:g},cygnus_index_args.slots)}}}else l.logMessage(m+" slot excluded from request due to no valid sizes"),e(t.placementCode)}}else e(t.placementCode)}function i(e,t){var i={id:e,imp:t,site:{page:l.getTopWindowUrl()}};if(!l.isEmpty(i.imp)){var r=A(i.imp[0].ext.siteID,i);c.default.loadScript(r)}}function r(e){if(B(e)){e=V(e),J[e.bidId]={},J[e.bidId].prebid=e;var t={};t.id=e.bidId,t.ext={},t.ext.siteID=e.params.video.siteID,delete e.params.video.siteID;var i=e.params.video.startdelay;if(0===e.params.video.startdelay?i="preroll":void 0===q[e.params.video.startdelay]&&(i="midroll"),t.ext.sid=[R[i],1,1,"s"].join("_"),t.video={},e.params.video){Object.keys(e.params.video).filter((function(e){return void 0!==I[e]||void 0!==h[e]})).forEach((function(i){"startdelay"===i&&void 0!==q[e.params.video[i]]&&(e.params.video[i]=q[e.params.video[i]]),"linearity"===i&&void 0!==b[e.params.video[i]]&&(e.params.video[i]=b[e.params.video[i]]),t.video[i]=e.params.video[i]}));var r=F(e.sizes).shift();if(r&&r.width&&r.height)return t.video.w=r.width,t.video.h=r.height,J[e.bidId].cygnus=t,t}}}function a(e,t){for(var i=0;i<t.length;i++)if(e.id===t[i].id)return t;return t.push(e),t}function g(e,t){var i=e.slots,r={};return l._each(i,(function(e){e.id===t&&(r=e)})),r}function y(){var e=d.default.createBid(2);e.bidderCode=v,u.default.addBidResponse($,e)}function A(e,t){var i="https:"===window.location.protocol?f.parse(S):f.parse(E);return i.search.s=e,i.search.r=encodeURIComponent(JSON.stringify(t)),f.format(i)}function O(e,t){var i=d.default.createBid(e,t);return i.code=H.getBidderCode(),i.bidderCode=H.getBidderCode(),i}function B(e){if("video"===e.mediaType&&l.hasValidBidRequest(e.params.video,Object.keys(I),m)&&M(e.params.video.siteID)&&P(e.params.video.playerType)&&j(e.params.video.protocols)&&U(e.params.video.maxduration)&&e.params.video.maxduration>0)return e}function M(e){var t=+e;return!(isNaN(t)||!l.isNumber(t)||t<0||l.isArray(e))||(l.logError("Site ID is invalid, must be a number > 0. Got: "+e),!1)}function P(e){return void 0!==e&&l.isStr(e)?(e=e.toUpperCase(),!!_[e]||(l.logError("Player type is invalid, must be one of: "+Object.keys(_)),!1)):(l.logError("Player type is invalid, must be one of: "+Object.keys(_)),!1)}function j(e){if(!l.isArray(e)||l.isEmpty(e))return l.logError("Protocol array is not an array. Got: "+e),!1;for(var t=0;t<e.length;t++){var i=e[t];if(!D[i])return l.logError("Protocol array contains an invalid protocol, must be one of: "+D+". Got: "+i),!1}return!0}function U(e){var t=+e;return!(isNaN(t)||!l.isNumber(t)||l.isArray(e))||(l.logError("Duration is invalid, must be a number. Got: "+e),!1)}function z(e){if(!l.isArray(e)||l.isEmpty(e))return l.logError("MIMEs array is not an array. Got: "+e),!1;for(var t=0;t<e.length;t++){var i=e[t];if(!l.isStr(i)||l.isEmptyStr(i)||!/^\w+\/[\w-]+$/.test(i))return l.logError("MIMEs array contains an invalid MIME type. Got: "+i),!1}return!0}function L(e){return!!b[e]||(l.logInfo("Linearity is invalid, must be one of: "+Object.keys(b)+". Got: "+e),!1)}function G(e){if(void 0===q[e]){var t=+e;if(isNaN(t)||!l.isNumber(t)||t<-2||l.isArray(e))return l.logInfo("Start delay is invalid, must be a number >= -2. Got: "+e),!1}return!0}function k(e,t){if(!l.isArray(e)||l.isEmpty(e))return l.logInfo("API array is not an array. Got: "+e),!1;for(var i=0;i<e.length;i++){var r=+e[i];if(isNaN(r)||!x[t].includes(r))return l.logInfo("API array contains an invalid API version. Got: "+r),!1}return!0}function V(e){e.params.video.siteID=+e.params.video.siteID,e.params.video.maxduration=+e.params.video.maxduration,e.params.video.protocols=e.params.video.protocols.reduce((function(e,t){return e.concat(D[t])}),[]);var t=e.params.video.minduration;void 0!==t&&U(t)||(l.logInfo("Using default value for 'minduration', default: "+h.minduration),e.params.video.minduration=h.minduration);var i=e.params.video.startdelay;void 0!==i&&G(i)||(l.logInfo("Using default value for 'startdelay', default: "+h.startdelay),e.params.video.startdelay=h.startdelay);var r=e.params.video.linearity;void 0!==r&&L(r)||(l.logInfo("Using default value for 'linearity', default: "+h.linearity),e.params.video.linearity=h.linearity);var a=e.params.video.mimes,s=e.params.video.playerType.toUpperCase();void 0!==a&&z(a)||(l.logInfo("Using default value for 'mimes', player type: '"+s+"', default: "+w[s]),e.params.video.mimes=w[s]);var o=e.params.video.apiList;return void 0===o||k(o,s)||(l.logInfo("Removing invalid api versions from api list."),l.isArray(o)?e.params.video.apiList=o.filter((function(e){return x[s].includes(e)})):e.params.video.apiList=[]),void 0===o&&e.params.video.allowVPAID&&l.isA(e.params.video.allowVPAID,"Boolean")&&(e.params.video.mimes=e.params.video.mimes.concat(T[s]),e.params.video.apiList=x[s]),l.isEmpty(e.params.video.apiList)&&(l.logInfo("API list is empty, VPAID ads will not be requested."),delete e.params.video.apiList),delete e.params.video.playerType,delete e.params.video.allowVPAID,e}function F(e){var t=[],i={};if(l.isArray(e)&&2===e.length&&!l.isArray(e[0])){if(!l.isNumber(e[0])||!l.isNumber(e[1]))return t;i.width=e[0],i.height=e[1],t.push(i)}else if("object"===(void 0===e?"undefined":o(e)))for(var r=0;r<e.length;r++){var a=e[r];(i={}).width=parseInt(a[0],10),i.height=parseInt(a[1],10),t.push(i)}return t}var H=new n.default("indexExchange"),X={},W=["id","siteID"],$="",J={};return pbjs.handleCygnusResponse=function(e){if(!e||!e.seatbid||l.isEmpty(e.seatbid))return l.logInfo("Cygnus returned no bids"),void Object.keys(J).forEach((function(e){var t=J[e].prebid,i=O(p.STATUS.NO_BID,t);l.logInfo(JSON.stringify(i)),u.default.addBidResponse(t.placementCode,i)}));e.seatbid.forEach((function(e){e.bid.forEach((function(e){var t=!0;if(void 0===J[e.impid])return l.logInfo("Cygnus returned mismatched id"),void Object.keys(J).forEach((function(e){var t=J[e].prebid,i=O(p.STATUS.NO_BID,t);u.default.addBidResponse(t.placementCode,i)}));e.ext.vasturl||(l.logInfo("Cygnus returned no vast url"),t=!1),f.parse(e.ext.vasturl).host===window.location.host&&(l.logInfo("Cygnus returned no vast url"),t=!1);var i=void 0;if("string"==typeof e.ext.pricelevel){var r=e.ext.pricelevel;"_"===r.charAt(0)&&(r=r.slice(1)),i=r/100,l.isNumber(i)&&!isNaN(i)||(l.logInfo("Cygnus returned invalid price"),t=!1)}else t=!1;var a=J[e.impid].prebid,s=J[e.impid].cygnus;if(t){var o=O(p.STATUS.GOOD,a);o.cpm=i,o.width=s.video.w,o.height=s.video.h,o.vastUrl=e.ext.vasturl,o.mediaType="video",u.default.addBidResponse(a.placementCode,o)}else{var n=O(p.STATUS.NO_BID,a);u.default.addBidResponse(a.placementCode,n)}}))})),J={}},s(this,{callBids:function(a){if(void 0!==a&&!l.isEmpty(a)){var s=a.bids;void 0===window._IndexRequestData&&(window._IndexRequestData={},window._IndexRequestData.impIDToSlotID={},window._IndexRequestData.reqOptions={}),_IndexRequestData.targetAggregate={open:{},private:{}},cygnus_index_args.slots=[];var n=[];s.forEach((function(e){if("video"===e.mediaType){var i=r(e);void 0!==i&&n.push(i)}else t(e)})),n.length>0&&i(a.bidderRequestId,n),cygnus_index_args.slots.length>20&&l.logError("Too many unique sizes on slots, will use the first 20.",m),cygnus_index_args.slots.length>0&&c.default.loadScript(N());var p=!1;window.cygnus_index_ready_state=function(){if(!p){p=!0;try{var t=_IndexRequestData.targetIDToBid;for(var i in X){var r=X[i].placementCode,a=[];for(var s in t){var n=/^(T\d_)?(.+)_(\d+)$/.exec(s);if(n){var f=n[1]||"",c=n[2],I=n[3],h=g(cygnus_index_args,f+c);if(c===i){var _=d.default.createBid(1);_.cpm=I/100,_.ad=t[s][0],_.bidderCode=v,_.width=h.width,_.height=h.height,_.siteID=h.siteID,"object"===o(_IndexRequestData.targetIDToResp)&&"object"===o(_IndexRequestData.targetIDToResp[s])&&void 0!==_IndexRequestData.targetIDToResp[s].dealID?(void 0===_IndexRequestData.targetAggregate.private[r]&&(_IndexRequestData.targetAggregate.private[r]=[]),_.dealId=_IndexRequestData.targetIDToResp[s].dealID,_IndexRequestData.targetAggregate.private[r].push(c+"_"+_IndexRequestData.targetIDToResp[s].dealID)):(void 0===_IndexRequestData.targetAggregate.open[r]&&(_IndexRequestData.targetAggregate.open[r]=[]),_IndexRequestData.targetAggregate.open[r].push(c+"_"+I)),a.push(_)}}else l.logError("Unable to parse "+s+", skipping slot",m)}if(a.length>0)for(var D=0;D<a.length;D++)u.default.addBidResponse(r,a[D]);else e(r)}}catch(e){l.logError("Error calling index adapter",m,e),y()}finally{_IndexRequestData.targetIDToBid={}}X={}}}}}})};g.default.registerBidAdapter(new B,"indexExchange",{supportedMediaTypes:["video"]}),e.exports=B}},[174]);
pbjsChunk([31],{183:function(e,n,t){t(184),e.exports=t(185)},184:function(e,n,t){"use strict";function r(e,n){var t=e.zone;if(n[t])for(var r=n[t].length;r--;)if(i(e,n[t][r]))return n[t].splice(r,1).pop();return!1}function i(e,n){var t=n.format;return e.allow&&e.allow.length?e.allow.indexOf(t)>-1:!e.exclude||!e.exclude.length||e.exclude.indexOf(t)<0}function o(e){var n={},t={};return e.forEach((function(e){var r=e.params,i=r.zone;if(1!==n[i]){var o=r.allow||r.formats||[],a=r.exclude||[];if(0===o.length&&0===a.length)return n[r.zone]=1;n[i]=n[i]||[[],{}],n[i][0]=c(n[i][0].concat(o)),a.forEach((function(e){n[i][1][e]?n[i][1][e]++:n[i][1][e]=1})),t[i]=t[i]||0,a.length&&t[i]++}})),Object.keys(t).forEach((function(e){if(1!==n[e]){var r=[];Object.keys(n[e][1]).forEach((function(i){n[e][1][i]===t[e]&&r.push(i)})),n[e][1]=r}})),Object.keys(n).forEach((function(e){1!==n[e]&&n[e][1].length&&(n[e][0].forEach((function(t){var r=n[e][1].indexOf(t);r>-1&&n[e][1].splice(r,1)})),n[e][0].length=0),1===n[e]||n[e][0].length||n[e][1].length||(n[e]=1)})),n}function c(e){for(var n=e.concat(),t=0;t<n.length;++t)for(var r=t+1;r<n.length;++r)n[t]===n[r]&&n.splice(r--,1);return n}function a(){var e=void 0;try{e=window.top}catch(n){e=window}return{screenWidth:e.screen.width,screenHeight:e.screen.height,innerWidth:e.innerWidth,innerHeight:e.innerHeight}}Object.defineProperty(n,"__esModule",{value:!0}),n.spec=void 0;var s=t(6),u=t(0),f=(0,u.getTopWindowLocation)().protocol+"//pre.ads.justpremium.com/v/2.0/t/xhr",h=[],d=n.spec={code:"justpremium",time:6e4,isBidRequestValid:function(e){return!!(e&&e.params&&e.params.zone)},buildRequests:function(e){var n=o(e),t=a(),r={zone:e.map((function(e){return parseInt(e.params.zone)})).filter((function(e,n,t){return t.indexOf(e)===n})),hostname:(0,u.getTopWindowLocation)().hostname,protocol:(0,u.getTopWindowLocation)().protocol.replace(":",""),sw:t.screenWidth,sh:t.screenHeight,ww:t.innerWidth,wh:t.innerHeight,c:n,id:e[0].params.zone,sizes:{}};e.forEach((function(e){var n=e.params.zone,t=r.sizes;t[n]=t[n]||[],t[n].push.apply(t[n],e.sizes)}));var i=JSON.stringify(r);return{method:"POST",url:f+"?i="+ +new Date,data:i,bids:e}},interpretResponse:function(e,n){var t=e.body,i=[];return n.bids.forEach((function(e){var n=r(e.params,t.bid);if(n){var o=e.sizes&&e.sizes.length&&e.sizes[0]||[],c={requestId:e.bidId,creativeId:n.id,width:o[0]||n.width,height:o[1]||n.height,ad:n.adm,cpm:n.price,netRevenue:!0,currency:n.currency||"USD",ttl:n.ttl||d.time};i.push(c)}})),i},getUserSyncs:function(e){return e.iframeEnabled&&h.push({type:"iframe",src:"//us-u.openx.net/w/1.0/pd?plm=10&ph=26e53f82-d199-49df-9eca-7b350c0f9646"}),h}};(0,s.registerBidder)(d)},185:function(e,n){}},[183]);
pbjsChunk([24],{215:function(e,t,r){r(216),e.exports=r(217)},216:function(e,t,r){"use strict";function n(e,t){var r=t.bids,n=t.startTime,a=[],d=r[0].params.sendBoPixel;void 0===d&&(d=!0);for(var u=0;u<e.length;u++){var s=e[u],c={};if(e.length==r.length)c.requestId=r[u].bidId;else for(var p=u;p<r.length;p++){var m=r[p];if(String(m.params.unit)===String(s.adunitid)&&o(s,m)&&!m.matched){c.requestId=m.bidId,m.matched=!0;break}}if(s.pub_rev){c.cpm=Number(s.pub_rev)/1e3;var f=s.creative[0];f&&(c.width=f.width,c.height=f.height),c.creativeId=f.id,c.ad=s.html,s.deal_id&&(c.dealId=s.deal_id),c.ttl=300,c.netRevenue=!0,c.currency=s.currency,s.tbd&&(c.tbd=s.tbd),c.ts=s.ts;var h=l.config.getConfig("bidderTimeout");window.PREBID_TIMEOUT&&(h=Math.min(window.PREBID_TIMEOUT,h));var b={bd:+new Date-n,br:"0",bt:h,bs:window.location.hostname};b.br=b.bt<b.bd?"t":"p",b.bp=s.pub_rev,b.ts=s.ts;var y=void 0;d&&(y=i(s.creative[0],b)),y&&v.userSync.registerSync("image",w,y),a.push(c)}}return a}function i(e,t){var r=e.tracking.impression.match(/([^?]+\/)ri\?/);if(r)return r[1]+"bo?"+a(t)}function a(e){for(var t in e)e.hasOwnProperty(t)&&(e[t]||delete e[t]);return b._map(Object.keys(e),(function(t){return t+"="+e[t]})).join("&")}function o(e,t){var r=b.parseSizesInput(t.sizes);if(!r)return!1;var n=!1,i=e.creative&&e.creative[0],a=String(i.width)+"x"+String(i.height);if(b.isArray(r))for(var o=0;o<r.length;o++){var d=r[o];if(String(d)===String(a)){n=!0;break}}return n}function d(e){var t=void 0,r=void 0,n=window,i=document,a=i.documentElement,o=void 0;if(e){try{n=window.top,i=window.top.document}catch(e){return}a=i.documentElement,o=i.body,t=n.innerWidth||a.clientWidth||o.clientWidth,r=n.innerHeight||a.clientHeight||o.clientHeight}else a=i.documentElement,t=n.innerWidth||a.clientWidth,r=n.innerHeight||a.clientHeight;return t+"x"+r}function u(e,t){var r=t[e];return b.isArray(r)&&(r=r.join(",")),(e.toLowerCase()+"="+r.toLowerCase()).replace("+",".").replace("/","_")}function s(e,t,r){if(b.isArray(e)){t.auid=b._map(e,(function(e){return e.params.unit})).join(","),t.dddid=b._map(e,(function(e){return e.transactionId})).join(","),t.aus=b._map(e,(function(e){return b.parseSizesInput(e.sizes).join(",")})).join("|");var n=[],i=!1;e.forEach((function(e){if(e.params.customParams){var t=b._map(Object.keys(e.params.customParams),(function(t){return u(t,e.params.customParams)})),r=window.btoa(t.join("&"));i=!0,n.push(r)}else n.push("")})),i&&(t.tps=n.join(","));var a=[],o=!1;return e.forEach((function(e){e.params.customFloor?(a.push(1e3*e.params.customFloor),o=!0):a.push(0)})),o&&(t.aumfs=a.join(",")),{method:"GET",url:"//"+r+"/w/1.0/arj",data:t,payload:{bids:e,startTime:new Date}}}}function c(e){return e.map((function(e){return{method:"GET",url:"http://"+e.params.delDomain+"/v/1.0/avjp",data:p(e),payload:{bid:e,startTime:new Date}}}))}function p(e){var t=e.params.video,r={auid:e.params.unit};return Object.keys(t).forEach((function(e){r[e]="openrtb"===e?JSON.stringify(t[e]):t[e]})),r.be="true",r}function m(e,t){var r=t.bid,n=(t.startTime,[]);if(void 0!==e&&""!==e.vastUrl&&""!==e.pub_rev){var i={};i.requestId=r.bidId,i.bidderCode=w,i.ttl=300,i.netRevenue=!0,i.currency=e.currency,i.cpm=Number(e.pub_rev)/1e3,i.width=e.width,i.height=e.height,i.creativeId=e.adid,i.vastUrl=e.vastUrl,i.mediaType=y.VIDEO,n.push(i)}return n}Object.defineProperty(t,"__esModule",{value:!0}),t.spec=void 0;var f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l=r(9),h=r(6),b=(function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t})(r(0)),v=r(18),y=r(13),g=[y.BANNER,y.VIDEO],w="openx",I=t.spec={code:w,supportedMediaTypes:g,isBidRequestValid:function(e){return!!(e.mediaType!==y.VIDEO||"object"===f(e.params.video)&&e.params.video.url)&&!(!e.params.unit||!e.params.delDomain)},buildRequests:function(e){var t=b.inIframe(),r=window.parent!==window?document.referrer:window.location.href;if(0!==e.length){var n=[],i=[],a=[],o=[];if(e.forEach((function(e){e.mediaType===y.VIDEO?o.push(e):a.push(e)})),0!==a.length){var u=a[0].params.delDomain,p=a[0].params.bc||"hb_pb_2.0.0";n=[s(a,{ju:r,jr:r,ch:document.charSet||document.characterSet,res:screen.width+"x"+screen.height+"x"+screen.colorDepth,ifr:t,tz:(new Date).getTimezoneOffset(),tws:d(t),ef:"bt%2Cdb",be:1,bc:p,nocache:(new Date).getTime()},u)]}return 0!==o.length&&(i=c(o)),n.concat(i)}},interpretResponse:function(e,t){var r=e.body,i=y.BANNER;if(t&&t.payload&&(t.payload.bids?i=t.payload.bids[0].mediaType:t.payload.bid&&(i=t.payload.bid.mediaType)),i===y.VIDEO)return r&&r.pixels&&v.userSync.registerSync("iframe","openx",r.pixels),m(r,t.payload);var a=r.ads.ad;return r.ads&&r.ads.pixels&&v.userSync.registerSync("iframe",w,r.ads.pixels),a||(a=[]),n(a,t.payload)}};(0,h.registerBidder)(I)},217:function(e,t){}},[215]);
pbjsChunk([19],{10:function(e,t,n){"use strict";function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}Object.defineProperty(t,"__esModule",{value:!0});var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.default=function(e){function t(e){var t=e.eventType,n=e.args,i=e.callback;(0,s.ajax)(N,i,JSON.stringify({eventType:t,args:n}))}function n(e){var t=e.eventType,n=e.args,i=this;A&&window[A]&&t&&n?this.track({eventType:t,args:n}):D.push((function(){U++,i.track({eventType:t,args:n})}))}function r(){if(O){for(var e=0;e<D.length;e++)D[e]();D.push=function(e){e()},O=!1}l.logMessage("event count sent to "+A+": "+U)}var _,N=e.url,h=e.analyticsType,A=e.global,m=e.handler,D=[],U=0,O=!0;return h===y&&(0,a.loadScript)(N,r),(h===S||b)&&r(),{track:function(e){var n=e.eventType,i=e.args;(this.getAdapterType()===y||b)&&window[A](m,n,i),this.getAdapterType()===S&&t.apply(void 0,arguments)},enqueue:n,enableAnalytics:function(e){var t=this,r=this;if(I="object"!==(void 0===e?"undefined":o(e))||"object"!==o(e.options)||void 0===e.options.sampling||Math.random()<parseFloat(e.options.sampling)){var a;u.getEvents().forEach((function(e){if(e){var t=e.eventType,i=e.args;t!==g&&n.call(r,{eventType:t,args:i})}})),i(a={},c,(function(e){return t.enqueue({eventType:c,args:e})})),i(a,E,(function(e){return t.enqueue({eventType:E,args:e})})),i(a,g,(function(e){return t.enqueue({eventType:g,args:e})})),i(a,v,(function(e){return t.enqueue({eventType:v,args:e})})),i(a,p,(function(e){return t.enqueue({eventType:p,args:e})})),i(a,T,(function(e){return t.enqueue({eventType:T,args:e})})),i(a,f,(function(e){return t.enqueue({eventType:f,args:e})})),i(a,d,(function(n){n.config=e.options,t.enqueue({eventType:d,args:n})})),_=a,l._each(_,(function(e,t){u.on(t,e)}))}else l.logMessage('Analytics adapter for "'+A+'" disabled by sampling');this.enableAnalytics=function(){return l.logMessage('Analytics adapter for "'+A+'" already enabled, unnecessary call to `enableAnalytics`.')}},disableAnalytics:function(){l._each(_,(function(e,t){u.off(t,e)}))},getAdapterType:function(){return h},getGlobal:function(){return A},getHandler:function(){return m},getUrl:function(){return N}}};var r=(function(e){return e&&e.__esModule?e:{default:e}})(n(4)),a=n(5),s=n(7),u=n(11),l=n(0),d=r.default.EVENTS.AUCTION_INIT,f=r.default.EVENTS.AUCTION_END,c=r.default.EVENTS.BID_REQUESTED,g=r.default.EVENTS.BID_TIMEOUT,E=r.default.EVENTS.BID_RESPONSE,v=r.default.EVENTS.BID_WON,p=r.default.EVENTS.BID_ADJUSTMENT,T=r.default.EVENTS.SET_TARGETING,y="library",S="endpoint",b="bundle",I=!0},238:function(e,t,n){e.exports=n(239)},239:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function o(){N.logInfo(h+"Enabled",m),D=!0}function r(e){try{e.session_id=O.sessId}catch(t){e.error_sess=1}return e}function a(e){try{e.target_site=m.site,e.debug=m.debug?1:0,e.pw_version=A}catch(t){e.error_env=1}return e}function s(e){try{e.pbjs_version=pbjs.version,e.debug=m.debug}catch(t){e.error_metric=1}return e}function u(e){var t=!1;try{for(var n in U)U[n]=N.getParameterByName(n),""!=U[n]&&(t=!0,e[n]=U[n]);if(!1===t)for(var i in U){var o=localStorage.getItem(l(i));null!==o&&void 0!==o&&0!==o.length&&(e[i]=o)}else for(var r in U)localStorage.setItem(l(r),U[r])}catch(t){N.logInfo(h+"Error",t),e.error_utm=1}return e}function l(e){return V.concat("_"+e)}function d(){return l(R)}function f(){return l(w)}function c(){localStorage.setItem(d(),Date.now())}function g(){return localStorage.getItem(f())?localStorage.getItem(f()):""}function E(){var e=localStorage.getItem(d());return Date.now()-e>M}function v(e,t){var n=!0;return void 0===t||void 0===t.args||void 0===t.args.auctionId&&void 0===t.args.requestId?n=!1:e!=_.default.EVENTS.BID_REQUESTED||void 0!==t.args.bids&&0!==t.args.bids.length||(n=!1),n}function p(e,t){var n=!1;return void 0!==t&&void 0!==t.args&&(e!=_.default.EVENTS.BID_RESPONSE&&e!=_.default.EVENTS.BID_ADJUSTMENT&&e!=_.default.EVENTS.BID_WON||void 0!==t.args.adUnitCode&&m.ignoreAdUnitCodes.includes(t.args.adUnitCode)&&(n=!0)),n}function T(e,t){if(void 0!==t&&void 0!==t.args&&e==_.default.EVENTS.BID_REQUESTED&&void 0!==t.args.bids)for(var n=t.args.bids.length;n--;)m.ignoreAdUnitCodes.includes(t.args.bids[n].adUnitCode)&&(t.args.bids.splice(n,1),N.logInfo(h+"Event "+e+" Ignore Removed",t));return t}Object.defineProperty(t,"__esModule",{value:!0});var y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},S=n(7),b=i(n(10)),I=i(n(1)),_=i(n(4)),N=n(0),h="PubWise Analytics: ",A="2.3.0",m={site:"",endpoint:"https://api.pubwise.io/api/v4/event/default/",ignoreAdUnitCodes:[],debug:""},D=!1,U={utm_source:"",utm_medium:"",utm_campaign:"",utm_term:"",utm_content:""},O={sessionId:""},V="pubwise",B=0,C=!1,M=18e5,w="sess_id",R="sess_timeout",j=y((0,b.default)({defaultUrl:"https://api.pubwise.io/api/v4/event/default/",analyticsType:"endpoint"}),{track:function(e){var t=e.eventType,n=e.args;N.logInfo(h+" "+t+" track"),this.handleEvent(t,n)}});j.handleEvent=function(e,t){N.logInfo(h+"Event "+e+" "+D,t);var n={eventType:e,args:t};n=a(n),e==_.default.EVENTS.SET_TARGETING&&(B=1),e==_.default.EVENTS.BID_RESPONSE&&(n.targetSet=B),e==_.default.EVENTS.AUCTION_END&&this.ensureSession(),e==_.default.EVENTS.AUCTION_INIT&&(this.ensureSession(),n=u(n=s(n=r(n))),!1===C?"undefined"!=typeof PREBID_TIMEOUT?n.targetTimeout=PREBID_TIMEOUT:n.targetTimeout="NA":n.targetTimeout="",C=!0),!0===v(e,n=T(e,n))?!1===p(e,n)?e!=_.default.EVENTS.ADD_AD_UNITS&&e!=_.default.EVENTS.SET_TARGETING&&e!=_.default.EVENTS.REQUEST_BIDS&&e!=_.default.EVENTS.BID_ADJUSTMENT&&e!=_.default.EVENTS.AUCTION_END?this.sendEventToEndpoint(m.endpoint,n):this.filterAnalyticsEvent(e,n):this.ignoreAnalyticsEvent(e,n):this.invalidAnalyticsEvent(e,n)},j.sendEventToEndpoint=function(e,t){(0,S.ajax)(e,(function(e){return N.logInfo(h+"Event Status is Sent",e)}),JSON.stringify(t))},j.invalidAnalyticsEvent=function(e,t){this.logEventDisposition("Invalid",e,t)},j.filterAnalyticsEvent=function(e,t){this.logEventDisposition("Filtered",e,t)},j.ignoreAnalyticsEvent=function(e,t){this.logEventDisposition("Ignored",e,t)},j.logEventDisposition=function(e,t,n){N.logInfo(h+"Event Status is "+e+" for "+t,n)},j.setConfig=function(e){void 0===e.options.debug&&(e.options.debug=N.debugTurnedOn()),void 0===(m=e.options).ignoreAdUnitCodes&&(m.ignoreAdUnitCodes=[])},j.storeSessionID=function(e){localStorage.setItem(f(),e)},j.ensureSession=function(){if(!0===E()){var e=N.generateUUID();this.storeSessionID(e)}O.sessId=g(),c()},j.adapterEnableAnalytics=j.enableAnalytics,j.enableAnalytics=function(e){this.setConfig(e),o(),j.adapterEnableAnalytics(e)},I.default.registerAnalyticsAdapter({adapter:j,code:"pubwise"}),t.default=j}},[238]);
pbjsChunk([78],{242:function(t,e,n){t.exports=n(243)},243:function(t,e,n){"use strict";var o=n(3),i=n(2),r=n(5),d=n(0),a=function(){function t(t){for(var n=t.bids,o=0;o<n.length;o++)e(n[o])}function e(t){try{new window.pp.Ad(n(t)).display()}catch(e){d.logError("pulsepoint.requestBid","ERROR",e),c(t)}}function n(t){var e=a(t),n={cn:1,ca:window.pp.requestActions.BID,cu:s,adUnitId:t.placementCode,callback:e};for(var o in t.params)t.params.hasOwnProperty(o)&&(n[o]=t.params[o]);return n}function a(t){return function(e){c(t,e)}}function c(t,e){if(e){var n=t.params.cf.toUpperCase().split("X"),r=o.createBid(1,t);r.bidderCode=t.bidder,r.cpm=e.bidCpm,r.ad=e.html,r.width=n[0],r.height=n[1],i.addBidResponse(t.placementCode,r)}else{var d=o.createBid(2,t);d.bidderCode=t.bidder,i.addBidResponse(t.placementCode,d)}}var p=window.location.protocol+"//tag-st.contextweb.com/getjs.static.js",s=window.location.protocol+"//bid.contextweb.com/header/tag";return{callBids:function(e){void 0===window.pp?r.loadScript(p,(function(){t(e)}),!0):t(e)}}};n(1).registerBidAdapter(new a,"pulsepoint"),t.exports=a}},[242]);
pbjsChunk([75],{265:function(e,t,r){e.exports=r(266)},266:function(e,t,r){"use strict";function i(){return"https:"===location.protocol}function n(e,t){return(t.cpm||0)-(e.cpm||0)}function o(){return[window.screen.width,window.screen.height].join("x")}function a(){var e=(function(){var e=window.DigiTrust&&(v.config.getConfig("digiTrustId")||window.DigiTrust.getUser({member:"T9QSFKPDN9"}));return e&&e.success&&e.identity||null})();return!e||e.privacy&&e.privacy.optout?[]:["dt.id",e.id,"dt.keyv",e.keyv,"dt.pref",0]}function s(e,t){return"<html>\n<head><script type='text/javascript'>inDapIF=true;<\/script></head>\n<body style='margin : 0; padding: 0;'>\n\x3c!-- Rubicon Project Ad Tag --\x3e\n<div data-rp-impression-id='"+t+"'>\n<script type='text/javascript'>"+e+"<\/script>\n</div>\n</body>\n</html>"}function d(e){var t=e.params;if("video"===e.mediaType){var r=[];return t.video.playerWidth&&t.video.playerHeight?r=[t.video.playerWidth,t.video.playerHeight]:Array.isArray(e.sizes)&&e.sizes.length>0&&Array.isArray(e.sizes[0])&&e.sizes[0].length>1&&(r=e.sizes[0]),r}return u(Array.isArray(t.sizes)?t.sizes.map((function(e){return(y[e]||"").split("x")})):e.sizes)}function u(e){var t=[15,2,9];return l.parseSizesInput(e).reduce((function(e,t){var r=parseInt(y[t],10);return r&&e.push(r),e}),[]).sort((function(e,r){var i=t.indexOf(e),n=t.indexOf(r);return i>-1||n>-1?-1===i?1:-1===n?-1:i-n:e-r}))}Object.defineProperty(t,"__esModule",{value:!0}),t.spec=void 0;var c=(function(){function e(e,t){var r=[],i=!0,n=!1,o=void 0;try{for(var a,s=e[Symbol.iterator]();!(i=(a=s.next()).done)&&(r.push(a.value),!t||r.length!==t);i=!0);}catch(e){n=!0,o=e}finally{try{!i&&s.return&&s.return()}finally{if(n)throw o}}return r}return function(t,r){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,r);throw new TypeError("Invalid attempt to destructure non-iterable instance")}})(),p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.masSizeOrdering=u,t.resetUserSync=function(){m=!1};var l=(function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t})(r(0)),f=r(6),v=r(9),y={1:"468x60",2:"728x90",5:"120x90",8:"120x600",9:"160x600",10:"300x600",13:"200x200",14:"250x250",15:"300x250",16:"336x280",19:"300x100",31:"980x120",32:"250x360",33:"180x500",35:"980x150",37:"468x400",38:"930x180",43:"320x50",44:"300x50",48:"300x300",54:"300x1050",55:"970x90",57:"970x250",58:"1000x90",59:"320x80",60:"320x150",61:"1000x1000",65:"640x480",67:"320x480",68:"1800x1000",72:"320x320",73:"320x160",78:"980x240",79:"980x300",80:"980x400",83:"480x300",94:"970x310",96:"970x210",101:"480x320",102:"768x1024",103:"480x280",108:"320x240",113:"1000x300",117:"320x100",125:"800x250",126:"200x600",144:"980x600",195:"600x300",199:"640x200",213:"1030x590",214:"980x360"};l._each(y,(function(e,t){return y[e]=t}));var x=t.spec={code:"rubicon",aliases:["rubiconLite"],supportedMediaTypes:["video"],isBidRequestValid:function(e){if("object"!==p(e.params))return!1;var t=e.params;return!!/^\d+$/.test(t.accountId)&&(!(d(e).length<1)&&!!("video"!==e.mediaType||"object"===p(t.video)&&t.video.size_id))},buildRequests:function(e,t){return e.map((function(e){if(e.startTime=(new Date).getTime(),"video"===e.mediaType){var r=e.params,n=d(e),s={page_url:r.referrer?r.referrer:l.getTopWindowUrl(),resolution:o(),account_id:r.accountId,integration:"pbjs_lite_v0.34.1",timeout:t.timeout-(Date.now()-t.auctionStart+500),stash_creatives:!0,ae_pass_through_parameters:r.video.aeParams,slots:[]},u={site_id:r.siteId,zone_id:r.zoneId,position:r.position||"btf",floor:parseFloat(r.floor)>.01?r.floor:.01,element_id:e.adUnitCode,name:e.adUnitCode,language:r.video.language,width:n[0],height:n[1],size_id:r.video.size_id};return r.inventory&&"object"===p(r.inventory)&&(u.inventory=r.inventory),r.keywords&&Array.isArray(r.keywords)&&(u.keywords=r.keywords),r.visitor&&"object"===p(r.visitor)&&(u.visitor=r.visitor),s.slots.push(u),{method:"POST",url:"//fastlane-adv.rubiconproject.com/v1/auction/video",data:s,bidRequest:e}}var c=e.params,f=c.accountId,v=c.siteId,y=c.zoneId,x=c.position,m=c.floor,h=c.keywords,b=c.visitor,_=c.inventory,g=c.userId,w=c.referrer;m=(m=parseFloat(m))>.01?m:.01,x=x||"btf";var j=d(e),z=["account_id",f,"site_id",v,"zone_id",y,"size_id",j[0],"alt_size_ids",j.slice(1).join(",")||void 0,"p_pos",x,"rp_floor",m,"rp_secure",i()?"1":"0","tk_flint","pbjs_lite_v0.34.1","tid",e.transactionId,"p_screen_res",o(),"kw",h,"tk_user_key",g];return null!==b&&"object"===(void 0===b?"undefined":p(b))&&l._each(b,(function(e,t){return z.push("tg_v."+t,e)})),null!==_&&"object"===(void 0===_?"undefined":p(_))&&l._each(_,(function(e,t){return z.push("tg_i."+t,e)})),z.push("rand",Math.random(),"rf",w||l.getTopWindowUrl()),z=z.concat(a()),z=z.reduce((function(e,t,r){return r%2==0&&void 0!==z[r+1]?e+t+"="+encodeURIComponent(z[r+1])+"&":e}),"").slice(0,-1),{method:"GET",url:"//fastlane.rubiconproject.com/a/api/fastlane.json",data:z,bidRequest:e}}))},interpretResponse:function(e,t){var r=t.bidRequest,i=(e=e.body).ads;return"object"!==(void 0===e?"undefined":p(e))||"ok"!==e.status?[]:("object"===(void 0===r?"undefined":p(r))&&"video"===r.mediaType&&"object"===(void 0===i?"undefined":p(i))&&(i=i[r.adUnitCode]),!Array.isArray(i)||i.length<1?[]:(i=i.sort(n)).reduce((function(e,t){if("ok"!==t.status)return[];var i={requestId:r.bidId,currency:"USD",creativeId:t.creative_id,cpm:t.cpm||0,dealId:t.deal,ttl:300,netRevenue:v.config.getConfig("rubicon.netRevenue")||!1};if("video"===r.mediaType)i.width=r.params.video.playerWidth,i.height=r.params.video.playerHeight,i.vastUrl=t.creative_depot_url,i.impression_id=t.impression_id;else{i.ad=s(t.script,t.impression_id);var n=y[t.size_id].split("x").map((function(e){return Number(e)})),o=c(n,2);i.width=o[0],i.height=o[1]}return i.rubiconTargeting=(Array.isArray(t.targeting)?t.targeting:[]).reduce((function(e,t){return e[t.key]=t.values[0],e}),{rpfl_elemid:r.adUnitCode}),e.push(i),e}),[]))},getUserSyncs:function(e){if(!m&&e.iframeEnabled)return m=!0,{type:"iframe",url:"https://tap-secure.rubiconproject.com/partner/scripts/rubicon/emily.html?rtb_ext=1"}}},m=!1;(0,f.registerBidder)(x)}},[265]);
pbjsChunk([6],{289:function(e,t,i){i(290),e.exports=i(291)},290:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.spec=void 0;var a=(function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t.default=e,t})(i(0)),r=i(6),n=i(13),d=i(4),o=t.spec={code:"sovrn",supportedMediaTypes:[n.BANNER],isBidRequestValid:function(e){return!(!e.params.tagid||isNaN(parseFloat(e.params.tagid))||!isFinite(e.params.tagid))},buildRequests:function(e){var t=[];a._each(e,(function(e){t.push({id:e.bidId,banner:{w:1,h:1},tagid:a.getBidIdParameter("tagid",e.params),bidfloor:a.getBidIdParameter("bidfloor",e.params)})}));var i={id:a.getUniqueIdentifierStr(),imp:t,site:{domain:window.location.host,page:window.location.pathname+location.search+location.hash}};return{method:"POST",url:"//ap.lijit.com/rtb/bid?src="+d.REPO_AND_VERSION,data:JSON.stringify(i),options:{contentType:"text/plain"}}},interpretResponse:function(e){var t=e.body,i=t.id,a=t.seatbid,r=[];return i&&a&&a.length>0&&a[0].bid&&a[0].bid.length>0&&a[0].bid.map((function(e){r.push({requestId:e.impid,cpm:parseFloat(e.price),width:parseInt(e.w),height:parseInt(e.h),creativeId:e.id,dealId:e.dealId||null,currency:"USD",netRevenue:!0,mediaType:n.BANNER,ad:decodeURIComponent(e.adm+'<img src="'+e.nurl+'">'),ttl:6e4})})),r}};(0,r.registerBidder)(o)},291:function(e,t){}},[289]);
pbjsChunk([2],{319:function(e,r,t){t(320),e.exports=t(321)},320:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.spec=void 0;var a=(function(e){if(e&&e.__esModule)return e;var r={};if(null!=e)for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(r[t]=e[t]);return r.default=e,r})(t(0)),i=t(6),n=r.spec={code:"undertone",isBidRequestValid:function(e){if(e&&e.params&&e.params.publisherId&&e.params.placementId)return e.params.publisherId=parseInt(e.params.publisherId),!0},buildRequests:function(e){var r={"x-ut-hb-params":[]},t=a.getTopWindowLocation().host,i=/[-\w]+\.(?:[-\w]+\.xn--[-\w]+|[-\w]{3,}|[-\w]+\.[-\w]{2})$/i.exec(t),n="//hb.undertone.com/hb?pid="+e[0].params.publisherId+"&domain="+i;return e.map((function(e){var t={bidRequestId:e.bidId,hbadaptor:"prebid",domain:i,placementId:e.params.placementId,publisherId:e.params.publisherId,sizes:e.sizes,params:e.params};r["x-ut-hb-params"].push(t)})),{method:"POST",url:n,withCredentials:!0,data:JSON.stringify(r)}},interpretResponse:function(e,r){var t=[],a=e.body;return a&&Array.isArray(a)&&a.length>0&&a.forEach((function(e){if(e.ad&&e.cpm>0){var r={requestId:e.bidRequestId,cpm:e.cpm,width:e.width,height:e.height,creativeId:e.adId,currency:e.currency,netRevenue:e.netRevenue,ttl:e.ttl,ad:e.ad};t.push(r)}})),t}};(0,i.registerBidder)(n)},321:function(e,r){}},[319]);
                     
pbjs.que.push(function() {
    console.log("PubWise AdUnits",adUnits);
    pbjs.addAdUnits(adUnits);
    pbjs.aliasBidder("appnexus","sekindoapn");              
    pbjs.aliasBidder("appnexus","MLogic");
    if (pubwise.loadType == 3) {
        pbjs.requestBids({
            bidsBackHandler: sendAdserverRequest
        });    
    }
});

function sendAdserverRequest() {
    if (pbjs.adserverRequestSent) return;
    console.log("PubWise AdServer Request Queued",PREBID_TIMEOUT);
    pbjs.adserverRequestSent = true;                    
    googletag.cmd.push(function() {
        console.log("PubWise AdServer Google Request Sent",PREBID_TIMEOUT);
        pbjs.que.push(function() {                        
            pbjs.setTargetingForGPTAsync();             
            console.log("PubWise Global Refresh");
            // global load type - refresh all ad units that are in our ad unit list!                           
            googletag.pubads().refresh();                
            pubwise.loadComplete = true;
        });
    });                    
}

function performPubWiseLoad(dfpSlot,enableDisplay){
    if (typeof enableDisplay == 'undefined') {
        enableDisplay = false;
    }    
    pubwiseLazyLoad(dfpSlot,enableDisplay);
}    
       
function pubwiseLazyLoad(dfpSlot,enableDisplay){
    console.log('PubWise Lazy Load AdUnitCode',dfpSlot);                    
    if (typeof dfpSlot != 'undefined'){
        console.log('PubWise Slot ID Defined',dfpSlot.getSlotElementId());        
        pbjs.que.push(function() {
            pbjs.requestBids({
                timeout: PREBID_TIMEOUT,
                adUnitCodes: [dfpSlot.getSlotElementId()],
                bidsBackHandler: function() {                                                                  
                    pbjs.setTargetingForGPTAsync(dfpSlot.getSlotElementId());
                    console.log('PubWise Lazy Load Display',enableDisplay);
                    if (enableDisplay === true) {                                            
                        googletag.display(dfpSlot.getSlotElementId());
                    }
                    googletag.pubads().refresh([dfpSlot]);
                    console.log('PubWise Lazy Load Complete');                               
                }
            });
        });                  
    }else{
        console.log('Not Defined '+slot_id);
    }    
}

if (pubwise.loadType == 3) {
    setTimeout(function() {  
        console.log("PubWise PBJS Timeout");  
        sendAdserverRequest();                    
    }, PREBID_TIMEOUT);
}

var _qevents = _qevents || [];
(function() {
    var elem = document.createElement('script');
    elem.src = (document.location.protocol == "https:" ? "https://secure" : "http://edge") + ".quantserve.com/quant.js";
    elem.async = true;
    elem.type = "text/javascript";
    var scpt = document.getElementsByTagName('script')[0];
    scpt.parentNode.insertBefore(elem, scpt);
})();
_qevents.push({qacct:"p-qEwZYqw48ca-M"});
pbjs.processQueue();
console.log("PubWise Load Complete 11032017");