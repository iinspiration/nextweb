import Link from '@lib/router/Link'

export const exportColumns = [
  { title: 'ID', selector: 'id' },
  { title: 'Name', selector: 'name' },
  { title: 'E-mail', selector: 'email' },
  { title: 'Phone', selector: 'claimed_telephone' },
  { title: 'Prize', selector: 'prize_name' },
  { title: 'Code', selector: 'prize_code' },
  { title: 'Address Name', selector: 'claimed_name' },
  { title: 'Address', selector: 'claimed_address' },
  { title: 'Date Created', selector: 'createdAt' },
]
export const dataColumns = [
  {
    name: 'Id',
    selector: 'id',
    sortable: true,
    minWidth: '60px',
    maxWidth: '60px',
  },
  {
    name: 'Name',
    selector: 'name',
    maxWidth: '150px',
  },
  {
    name: 'E-mail',
    selector: 'email',
    omit: false,
    maxWidth: '200px',
  },
  {
    name: 'Prize',
    cell: row => {
      const restData = JSON.parse('[' + row.data + ']')
      return (
        <div>
          {restData.map((item, i) => {
            return (
              <div key={i}>
                <strong>Name</strong> : {item.name}
                <br />
                <strong>Code</strong> : {item.code}
                <br />
              </div>
            )
          })}
        </div>
      )
    },
    minWidth: '300px',
  },
  {
    name: 'Claim Info',
    cell: row => {
      const restData = JSON.parse('[' + row.data + ']')
      return (
        <div>
          {restData.map((item, i) => {
            let claimInfo =
              item.claim_info !== undefined ? item.claim_info : null
            return (
              <div key={i}>
                {claimInfo !== null && (
                  <div>
                    <strong>Name</strong> : {claimInfo.name}
                    <br />
                    <strong>Address</strong> : {claimInfo.address}
                    <br />
                    <strong>Telephone</strong> : {claimInfo.telephone}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      )
    },
    minWidth: '200px',
  },
  {
    name: 'Claimed',
    cell: row =>
      row.claimed === true ? (
        <span css={{ color: 'green' }}>สำเร็จ</span>
      ) : (
        <span css={{ color: 'orange' }}>ดำเนินการ</span>
      ),
    sortable: true,
    maxWidth: '100px',
  },
  {
    name: 'Created',
    selector: 'createdAt',
    sortable: true,
    minWidth: '150px',
    maxWidth: '150px',
  },
  // {
  //   name: 'Action',
  //   maxWidth: '70px',
  //   cell: row => {
  //     return (
  //       <Link
  //         route="campaign-winner-detail"
  //         params={{ campaignId: campaignId, winnerId: row.id }}
  //         passHref>
  //         <a
  //           css={{
  //             padding: 10,
  //             width: '100%',
  //             textAlign: 'center',
  //             background: '#eee',
  //           }}>
  //           View
  //         </a>
  //       </Link>
  //     )
  //   },
  // },
]
