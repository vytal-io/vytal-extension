import { Box } from 'theme-ui'

interface TableRowProps {
  title: string
  value?: string
  noBorder?: boolean
}

const TableRow = ({ title, value, noBorder = false }: TableRowProps) => {
  return (
    <tr
      sx={{
        borderBottom: noBorder ? 'none' : '1px solid',
        borderBottomColor: 'grey',
      }}
    >
      <td sx={{ fontWeight: '700', width: '100px', p: '8px' }}>{title}</td>
      <td>
        <Box
          sx={{
            width: '188px',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}
          title={value}
        >
          {value}
        </Box>
      </td>
    </tr>
  )
}

export default TableRow
