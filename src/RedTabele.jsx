function RedTabele({kurs}){


    return (   
        <tr>
            <th scope="row">{kurs.id}</th>
            <td>{kurs.naziv}</td>
            <td>{kurs.opis}</td>
            <td>{kurs.cena}</td>
            <td>{kurs.predavac}</td>
            <td>{kurs.trajanje}</td>
          
        </tr>
        );
}

export default RedTabele;