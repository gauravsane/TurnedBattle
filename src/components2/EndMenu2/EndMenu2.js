import styles from './styles.module.css';

export const EndMenu2 = ({ winner, onStartClick, losser}) => {
  return (
    <div className={styles.main}>
      <h1>{winner.name} has won!</h1>
      <button className={styles.startButton} onClick={onStartClick}>
        Play Again
      </button>

      {/* <div className="board">
        <h1>LeaderBoard</h1> */}

        {/* <table>
        
        <tr>
          <th>Name</th>
          <th>Photo</th>
          <th>Score</th>
          <th>Win</th>
        </tr>

        <tr>
          <td>{winner.name}</td>
          <td><img src="/assets/Jiraya.png" alt="img"></img></td>
          <td>100pt</td>
          <td>1</td>
        </tr>


      </table> */}
      </div>

      

    
  );
};
