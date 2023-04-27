export default function dateFormatter(value) {
    return (new Date(value)).toLocaleDateString('id-ID',{dateStyle : 'medium'})
}