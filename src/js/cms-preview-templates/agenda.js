import React from "react";
import { List } from 'immutable';
import ReactMarkdown from "react-markdown";


export default class ValuesPreview extends React.Component {
  render() {
    const {entry, widgetFor, getAsset} = this.props;
    

    const entryAgenda = entry.getIn(["data", "agenda"]);
    const agenda = entryAgenda ? entryAgenda.toJS() : [];
    
    return <article className="cms content"><table>
          {agenda.map(({datum, omschrijving, afgelast}) =>
            <tr ><td>{afgelast} <ReactMarkdown source={omschrijving} /></td><td><ReactMarkdown source={datum} /></td></tr>
          )}
        </table></article>;
  }
}