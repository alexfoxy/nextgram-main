import UserModal from '../../../../components/UserModal'

export default function UserModalRoute({ params }: { params: { id: string, userId: string } }) {
  return <UserModal id={params.userId} goBackDepth={2} />
}
