import Application from 'ember-gst-codecoverage/app';
import config from 'ember-gst-codecoverage/config/environment';
import * as QUnit from 'qunit';
import { setApplication } from '@ember/test-helpers';
import { setup } from 'qunit-dom';
import { start } from 'ember-qunit';

QUnit.done(async function() {
  forceModulesToBeLoaded();
  await sendCoverage();
});

setApplication(Application.create(config.APP));

setup(QUnit.assert);

start();
