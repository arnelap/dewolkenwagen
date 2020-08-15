import React from "react";
import { List } from 'immutable';
import ReactMarkdown from "react-markdown";


export default class AgendaPreview extends React.Component {
  render() {
    const {entry, widgetFor, getAsset} = this.props;
    

    const entryAgenda = entry.getIn(["data", "agenda"]);
    const agenda = entryAgenda ? entryAgenda.toJS() : [];
    return  <article className="cms content">
    <h1>{ entry.getIn(["data", "title"])}</h1>
      <h2>{ entry.getIn(["data", "subtitle"])}</h2><table><tbody>
          {agenda.map(({datum, omschrijving, afgelast}, i) =>
            <tr ><td><ReactMarkdown source={omschrijving} /></td><td><ReactMarkdown source={datum} /></td></tr>
          )}
        </tbody></table></article>;

  }
}