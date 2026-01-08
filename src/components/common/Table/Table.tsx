import { ReactNode } from 'react';
import classNames from 'classnames';
import styles from './Table.module.css';

interface Column<T> {
  key: string;
  header: string;
  render?: (item: T) => ReactNode;
}

interface TableProps<T> {
  data: T[];
  columns: Column<T>[];
  keyExtractor: (item: T) => string;
  className?: string;
  emptyMessage?: string;
}

export default function Table<T extends Record<string, unknown>>({
  data,
  columns,
  keyExtractor,
  className,
  emptyMessage = 'No data available',
}: TableProps<T>) {
  if (data.length === 0) {
    return <div className={styles.empty}>{emptyMessage}</div>;
  }

  return (
    <div className={classNames(styles.tableContainer, className)}>
      <table className={styles.table}>
        <thead className={styles.thead}>
          <tr>
            {columns.map((column) => (
              <th key={column.key} className={styles.th}>
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className={styles.tbody}>
          {data.map((item) => (
            <tr key={keyExtractor(item)} className={styles.tr}>
              {columns.map((column) => (
                <td key={column.key} className={styles.td}>
                  {column.render ? column.render(item) : String(item[column.key])}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
