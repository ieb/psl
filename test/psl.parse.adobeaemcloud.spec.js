/*eslint no-var:0, prefer-arrow-callback: 0 */
'use strict';


var Assert = require('assert');
var Psl = require('../');


describe('psl.parse.adobe()', function () {


  it('should parse a adobeaemcloud.net domain, Origins', function () {

    var parsed = Psl.parse('author-p213-e23432-cm.adobeaemcloud.net');
    Assert.equal(parsed.tld, 'adobeaemcloud.net');
    Assert.equal(parsed.sld, 'author-p213-e23432-cm');
    Assert.equal(parsed.domain, 'author-p213-e23432-cm.adobeaemcloud.net');
    Assert.equal(parsed.subdomain, null);
    Assert.equal(parsed.listed, true);
  });

  it('should parse a adobeaemcloud.net subdomain, Origin, not used', function () {

    var parsed = Psl.parse('something.author-p213-e23432-cm.adobeaemcloud.net');
    Assert.equal(parsed.tld, 'adobeaemcloud.net');
    Assert.equal(parsed.sld, 'author-p213-e23432-cm');
    Assert.equal(parsed.domain, 'author-p213-e23432-cm.adobeaemcloud.net');
    Assert.equal(parsed.subdomain, 'something');
    Assert.equal(parsed.listed, true);
  });
  it('should parse a adobeaemcloud.com domain, edge', function () {

    var parsed = Psl.parse('author-p213-e23432-cm.adobeaemcloud.com');
    Assert.equal(parsed.tld, 'adobeaemcloud.com');
    Assert.equal(parsed.sld, 'author-p213-e23432-cm');
    Assert.equal(parsed.domain, 'author-p213-e23432-cm.adobeaemcloud.com');
    Assert.equal(parsed.subdomain, null);
    Assert.equal(parsed.listed, true);
  });
  it('should parse a adobeaemcloud.com subdomain, edge not used', function () {

    var parsed = Psl.parse('something.author-p213-e23432-cm.adobeaemcloud.com');
    Assert.equal(parsed.tld, 'adobeaemcloud.com');
    Assert.equal(parsed.sld, 'author-p213-e23432-cm');
    Assert.equal(parsed.domain, 'author-p213-e23432-cm.adobeaemcloud.com');
    Assert.equal(parsed.subdomain, 'something');
    Assert.equal(parsed.listed, true);
  });
  it('should parse a dev.adobeaemcloud.com dev', function () {

    var parsed = Psl.parse('dev.adobeaemcloud.com');
    Assert.equal(parsed.tld, 'dev.adobeaemcloud.com');
    Assert.equal(parsed.sld, null);
    Assert.equal(parsed.domain, null);
    Assert.equal(parsed.subdomain, null);
    Assert.equal(parsed.listed, true);
  });
  it('should parse a cluster.dev.adobeaemcloud.com dev', function () {

    var parsed = Psl.parse('cluster.dev.adobeaemcloud.com');
    Assert.equal(parsed.tld, 'cluster.dev.adobeaemcloud.com');
    Assert.equal(parsed.sld, null);
    Assert.equal(parsed.domain, null);
    Assert.equal(parsed.subdomain, null);
    Assert.equal(parsed.listed, true);
  });
  it('should parse a target.cluster.dev.adobeaemcloud.com dev', function () {

    var parsed = Psl.parse('target.cluster.dev.adobeaemcloud.com');
    Assert.equal(parsed.tld, 'cluster.dev.adobeaemcloud.com');
    Assert.equal(parsed.sld, 'target');
    Assert.equal(parsed.domain, 'target.cluster.dev.adobeaemcloud.com');
    Assert.equal(parsed.subdomain, null);
    Assert.equal(parsed.listed, true);
  });
  it('should parse a sub.target.cluster.dev.adobeaemcloud.com dev', function () {

    var parsed = Psl.parse('sub.target.cluster.dev.adobeaemcloud.com');
    Assert.equal(parsed.tld, 'cluster.dev.adobeaemcloud.com');
    Assert.equal(parsed.sld, 'target');
    Assert.equal(parsed.domain, 'target.cluster.dev.adobeaemcloud.com');
    Assert.equal(parsed.subdomain, 'sub');
    Assert.equal(parsed.listed, true);
  });
  it('should parse a sub.target.cluster.edge.adobeaemcloud.com dev', function () {

    var parsed = Psl.parse('sub.target.cluster.edge.adobeaemcloud.com');
    Assert.equal(parsed.tld, 'adobeaemcloud.com');
    Assert.equal(parsed.sld, 'edge');
    Assert.equal(parsed.domain, 'edge.adobeaemcloud.com');
    Assert.equal(parsed.subdomain, 'sub.target.cluster');
    Assert.equal(parsed.listed, true);
  });
});
