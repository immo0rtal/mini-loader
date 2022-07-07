import SomeConvenientWidget from "components/SomeConvenientWidget";

import LoaderContext from "providers/LoaderContext";

import "./App.css";

export type MessagesType = Record<string, string>;

const messages: MessagesType = {
  "Loading.First": "Виджет крузится",
  "Loading.Second": "Виджет ещё грузится",
  "Loading.Third": "Загрузка идёт дольше чем обычно. Пожалуйста, подождите",
  "Error.Timeout": "Ошибка при загрузке. Пожалуйста -- обновите окно",
  "Success.LoadingFinished": "Виджет загружен!",
};

const App = () => {
  return (
    <LoaderContext.Provider value={messages}>
      <div className="App">
        <SomeConvenientWidget />
      </div>
    </LoaderContext.Provider>
  );
};

export default App;
