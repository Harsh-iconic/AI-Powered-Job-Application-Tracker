const escapeRegex=require('./escapeRegex');
const statuses=['Wishlist','Applied','Assessment','Interview','Offer','Rejected'];
const employmentTypes=['Full-time','Part-time','Internship','Contract','Remote'];
function buildJobFilter(query={},userId){
  const filter={user:userId};
  if(statuses.includes(query.status))filter.status=query.status;
  if(employmentTypes.includes(query.employmentType))filter.employmentType=query.employmentType;
  if(query.search){const search=escapeRegex(String(query.search).slice(0,80));filter.$or=['company','position','location'].map(field=>({[field]:{$regex:search,$options:'i'}}));}
  return filter;
}
module.exports={buildJobFilter,statuses,employmentTypes};
