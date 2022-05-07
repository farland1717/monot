const directory = `${__dirname}/../..`;
const {
  LowLevelConfig
} = require(`${directory}/proprietary/lib/config`);
const history = new LowLevelConfig('history.mndata').copyFileIfNeeded(
  `${directory}/default/data/history.mndata`,
);

class History {
  constructor() {
    this.history = [];
  }

  getAll() {
    return history.update(), history.slice();
  }

  get(arrayStart, arrayBegin) {
    let data;
    history.update();
    try {
      data = history.slice(arrayStart, arrayBegin);
    } catch (e) {
      return (
        console.error(
          `historyに${arrayBegin}番目の要素はありません。
          historyの最後の要素は${history.length - 1}です。`
        ),
        -1
      );
    }
    return data;
  }

  set(data) {
    history.update();
    // .data.push(data).save();
    console.log(history.data.unshift(data));
    history.save();
  }
}

module.exports = {
  History
};
