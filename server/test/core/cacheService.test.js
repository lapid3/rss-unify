'use strict';
var assert = require('assert'),
	CacheService = require('../../src/core/cacheService');

var testTopics = [
	{
		name : 'js',
		description : 'html5/js feeds',
		feeds : []
	}
];

// simple redis mock
var redisMock = require('../mocks/store.mock');

describe('Cache', function() {

	describe('#cache()', function() {
		it('should store the topic in cache with the following key: ' + testTopics[0].name, function(done) {
			var cacheService = new CacheService(redisMock);
			cacheService.cacheFeed(testTopics[0], function() {
				assert.notEqual(redisMock.get(testTopics[0].name), undefined);
				done();
			});
		});
		it('should store the topic in cache with the following key: ' + testTopics[0].name + '/rss', function(done) {
			var cacheService = new CacheService(redisMock);
			cacheService.cacheFeed(testTopics[0], function() {
				assert.notEqual(redisMock.get(testTopics[0].name + '/rss'), undefined);
				done();
			});
		});
	});
});