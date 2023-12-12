import Application from 'test-ember-intl-with-ember-native-types/app';
import config from 'test-ember-intl-with-ember-native-types/config/environment';
import * as QUnit from 'qunit';
import { setApplication } from '@ember/test-helpers';
import { setup } from 'qunit-dom';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

setup(QUnit.assert);

start();
