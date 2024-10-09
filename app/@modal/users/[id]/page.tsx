import UserModal from '../../../components/UserModal'

export default function UserModalRoute({ params }: { params: { id: string } }) {
  return <UserModal id={params.id} modalPath="*" />
}
