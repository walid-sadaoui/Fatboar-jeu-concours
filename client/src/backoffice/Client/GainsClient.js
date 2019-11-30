import React from 'react';

class GainsClient extends React.Component {

  render() {
    return this.renderTable();
        // return (
        //   <table className="table table-hover table-light wow fadeInUp">
        //   <thead>
        //     <tr>
        //       <th scope="col">#</th>
        //       <th scope="col">Gains</th>
        //       <th scope="col">Date</th>
        //       <th scope="col">Heure</th>
        //     </tr>
        //   </thead>
        //   <tbody>
        //     <tr className="table-primary">
        //       <th scope="row">1</th>
        //       <td>Une entrée au choix</td>
        //       <td>18/11/2019</td>
        //       <td>17h30</td>
        //     </tr>
        //     <tr>
        //       <th scope="row">2</th>
        //       <td>Un dessert au choix</td>
        //       <td>18/11/2019</td>
        //       <td>17h55</td>
        //     </tr>
        //     <tr className="table-primary">
        //       <th scope="row">3</th>
        //       <td>Un burger au choix</td>
        //       <td>18/11/2019</td>
        //       <td>17h58</td>
        //     </tr>
        //     <tr>
        //       <th scope="row">4</th>
        //       <td>Un menu du jour</td>
        //       <td>18/11/2019</td>
        //       <td>17h59</td>
        //     </tr>
        //     <tr class="table-primary">
        //       <th scope="row">5</th>
        //       <td>Un menu au choix</td>
        //       <td>18/11/2019</td>
        //       <td>18h10</td>
        //     </tr>
        //     <tr>
        //       <th scope="row">6</th>
        //       <td>Une réducation de 70%</td>
        //       <td>18/11/2019</td>
        //       <td>18h30</td>
        //     </tr>
        //     <tr class="table-primary">
        //       <th scope="row">7</th>
        //       <td>Une entrée au choix</td>
        //       <td>18/11/2019</td>
        //       <td>17h30</td>
        //     </tr>
        //     <tr>
        //       <th scope="row">8</th>
        //       <td>Un dessert au choix</td>
        //       <td>18/11/2019</td>
        //       <td>17h55</td>
        //     </tr>
        //     <tr class="table-primary">
        //       <th scope="row">9</th>
        //       <td>Un burger au choix</td>
        //       <td>18/11/2019</td>
        //       <td>17h58</td>
        //     </tr>
        //     <tr>
        //       <th scope="row">10</th>
        //       <td>Un menu du jour</td>
        //       <td>18/11/2019</td>
        //       <td>17h59</td>
        //     </tr>
        //     <tr class="table-primary">
        //       <th scope="row">11</th>
        //       <td>Un menu au choix</td>
        //       <td>18/11/2019</td>
        //       <td>18h10</td>
        //     </tr>
        //     <tr>
        //       <th scope="row">12</th>
        //       <td>Une réducation de 70%</td>
        //       <td>18/11/2019</td>
        //       <td>18h30</td>
        //     </tr>
        //     <tr class="table-primary">
        //       <th scope="row">13</th>
        //       <td>Une entrée au choix</td>
        //       <td>18/11/2019</td>
        //       <td>17h30</td>
        //     </tr>
        //     <tr>
        //       <th scope="row">14</th>
        //       <td>Un dessert au choix</td>
        //       <td>18/11/2019</td>
        //       <td>17h55</td>
        //     </tr>
        //     <tr class="table-primary">
        //       <th scope="row">15</th>
        //       <td>Un burger au choix</td>
        //       <td>18/11/2019</td>
        //       <td>17h58</td>
        //     </tr>
        //     <tr>
        //       <th scope="row">16</th>
        //       <td>Un menu du jour</td>
        //       <td>18/11/2019</td>
        //       <td>17h59</td>
        //     </tr>
        //     <tr class="table-primary">
        //       <th scope="row">17</th>
        //       <td>Un menu au choix</td>
        //       <td>18/11/2019</td>
        //       <td>18h10</td>
        //     </tr>
        //     <tr>
        //       <th scope="row">18</th>
        //       <td>Une réducation de 70%</td>
        //       <td>18/11/2019</td>
        //       <td>18h30</td>
        //     </tr>
        //   </tbody>
        // </table>
      //  );
  }

  renderTable() {
    return (
      <table className="table table-hover table-light wow fadeInUp">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Gains</th>
            <th scope="col">Date</th>
            <th scope="col">Heure</th>
          </tr>
        </thead>
        <tbody>
          {this.buildTableBody()}
        </tbody>
      </table>
    );
  }

  buildTableBody() {
    const body = [];

    for(let gain of this.props.gains) {
      const row = [];
      for (let property of Object.keys(gain)) {
        row.push(<td>{gain[property]}</td>);
      }
      body.push(<tr>{row}</tr>);
    }

    return body; 
  }
}

export default GainsClient