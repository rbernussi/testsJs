import yaml from 'js-yaml';
import fs from 'fs';

let config = {};

config = yaml.load(fs.readFileSync('config.yaml', 'utf-8'));
console.log(config.application);

function getAppName(){
    const appName = config.application.name
    return appName;
}

function getConfiguration(configuration)
{
    for(let i = 0; i < configuration.length; i++ )
    {
        let c = configuration[i];
        console.log(c[0]);
    }
}

getConfiguration(config.configuration)



console.log(getAppName());