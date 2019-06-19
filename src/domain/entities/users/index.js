import idUtils from '../../../utils/idUtils'
import makeHash from '../../../utils/hashUtils'
import buildMakeUser from './users'

const makeUser = buildMakeUser({ idUtils, makeHash })

export default makeUser