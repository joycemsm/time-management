import { HistoryContainer, HistoryList, Status } from './styles'

import { CyclesContext } from '../../contexts/CyclesContext'
import { formatDistanceToNow } from 'date-fns'
import { useContext } from 'react'

export function History() {
  const { cycles } = useContext(CyclesContext)

  return (
    <HistoryContainer>
      <h1>My History</h1>

      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Task</th>
              <th>Duration</th>
              <th>Start</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {cycles.map((cycle) => {
              return (
                <tr key={cycle.id}>
                  <td>{cycle.task}</td>
                  <td>{cycle.minutesAmount} minutes</td>
                  <td>
                    {formatDistanceToNow(cycle.startDate, {
                      addSuffix: true,
                    })}
                  </td>
                  <td>
                    {cycle.finisheDate && (
                      <Status statusColor="green">Done</Status>
                    )}

                    {cycle.interruptedData && (
                      <Status statusColor="red">Interruptedne</Status>
                    )}

                    {!cycle.finishedDate && !cycle.interruptedData && (
                      <Status statusColor="yellow">In progress</Status>
                    )}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  )
}
