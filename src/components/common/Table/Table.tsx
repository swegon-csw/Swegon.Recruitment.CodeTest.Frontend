import { EmptyMessage,StyledTable, TableContainer, Tbody, Td, Th, Thead, Tr } from "./Table.styled";
import { TableProps } from "./Table.types";

export default function Table<T extends Record<string, unknown>>({
  data,
  columns,
  keyExtractor,
  emptyMessage = "No data available",
}: TableProps<T>) {
  if (data.length === 0) {
    return <EmptyMessage>{emptyMessage}</EmptyMessage>;
  }

  return (
    <TableContainer>
      <StyledTable>
        <Thead>
          <tr>
            {columns.map((column) => (
              <Th key={column.key}>{column.header}</Th>
            ))}
          </tr>
        </Thead>
        <Tbody>
          {data.map((item) => (
            <Tr key={keyExtractor(item)}>
              {columns.map((column) => (
                <Td key={column.key}>{column.render ? column.render(item) : String(item[column.key])}</Td>
              ))}
            </Tr>
          ))}
        </Tbody>
      </StyledTable>
    </TableContainer>
  );
}
