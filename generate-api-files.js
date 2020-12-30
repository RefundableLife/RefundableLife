const replaceInFiles = require('replace-in-files');
const fs = require('fs');

const replaceAll = async (type, host, remoteUrl) => {
  const filename = 'api-spec-' + type + '.yml';

  await new Promise((res, rej) => {
    fs.copyFile('api-spec-template.yml', filename, (err) => {
      if (err) {
        console.error(err);
        rej(err);
      }

      res();
    });
  });

  await replaceInFiles({
    files: filename,
    from: 'TEMPLATEURL',
    to: remoteUrl,
    saveOldFile: false,
    returnCountOfMatchesByPaths: true,
  });

  await replaceInFiles({
    files: filename,
    from: 'TEMPLATEHOST',
    to: host,
    saveOldFile: false,
    returnCountOfMatchesByPaths: true,
  });
};

Promise.all([
  replaceAll('staging', 'beta.api', 'rttnz34elq'),
  replaceAll('production', 'api', 'rttnz34elq'),
])
  .then((r) => {
    console.log('Done');
  })
  .catch((err) => {
    console.error(err);
  });
