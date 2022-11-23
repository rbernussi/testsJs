import yaml from 'js-yaml';
import fs from 'fs';

let config = {};
config = yaml.load(fs.readFileSync('config.yaml', 'utf-8'));

for (var i = 0; i < config.configuration.length; i++) {
    var key = Object.keys(config.configuration[i])[0];
    var value = config.configuration[i][key];
    console.log(value);
}