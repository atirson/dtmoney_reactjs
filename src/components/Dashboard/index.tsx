import { Container } from "./styles";

import { Summary } from '../Summary';
import { TransantionsTable } from "../TransactionsTable";

export function Dashboard() {
  return (
    <Container>
      <Summary />
      <TransantionsTable />
    </Container>
  )
} 