import { Box } from 'theme-ui'

interface TableProps {
  children: React.ReactNode
}

const Table = ({ children }: TableProps) => {
  return (
    <Box
      sx={{
        border: '1px solid',
        mt: '12px',
        mb: '8px',
        borderRadius: '4px',
        borderColor: 'grey',
      }}
    >
      <table
        sx={{
          borderCollapse: 'collapse',
          borderSpacing: '0 10px',
        }}
      >
        <tbody>{children}</tbody>
      </table>
    </Box>
  )
}

export default Table
