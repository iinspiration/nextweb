export const exportColumns = [
  { title: 'ID', selector: 'id' },
  { title: 'Name', selector: 'name' },
  { title: 'Label', selector: 'label' },
  { title: 'Amount', selector: 'amount' },
  { title: 'Max Amount', selector: 'max_amount' },
  { title: 'Weight', selector: 'weight' },
  { title: 'Status', selector: 'status' },
  { title: 'Type', selector: 'type' },
]

export const dataColumns = [
  // {
  //   name: 'Id',
  //   selector: 'id',
  //   minWidth: '60px',
  //   maxWidth: '60px',
  // },
  {
    name: 'Label',
    selector: 'label',
    maxWidth: '150px',
  },
  {
    name: 'Name',
    selector: 'name',
  },
  {
    name: 'Amount',
    maxWidth: '140px',
    cell: row =>
      `${row.amount.toLocaleString()} / ${row.max_amount.toLocaleString()}`,
  },
  {
    name: 'Draw Rate',
    selector: 'weight',
    maxWidth: '100px',
  },
  {
    name: 'Status',
    selector: 'status',
    maxWidth: '100px',
  },
  {
    name: 'Type',
    selector: 'type',
    maxWidth: '120px',
  },
  {
    name: 'Updated',
    selector: 'updatedAt',
    minWidth: '172px',
    maxWidth: '172px',
    sortable: true,
  },
  // {
  //   name: 'Action',
  //   cell: row => {
  //     return (
  //       <Link
  //         route="campaign-winner-detail"
  //         params={{ campaignId: campaignId, prizeId: row.id }}
  //         passHref>
  //         <a css={{ padding: 10, background: '#eee' }}>View</a>
  //       </Link>
  //     )
  //   },
  // },
]
