import { Box } from 'theme-ui'

interface TableProps {
  title?: string
  children: React.ReactNode
}

const Table = ({ title, children }: TableProps) => {
  return (
    <>
      {title && (
        <Box
          sx={{ fontSize: '16px', mt: '12px', mb: '6px', fontWeight: '600' }}
        >
          {title}
        </Box>
      )}
      <Box
        sx={{
          border: '1px solid',
          mb: '12px',
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
    </>
  )
}

export default Table
