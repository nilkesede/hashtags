import {func, string} from 'prop-types'

import {TextBox} from '../../Input'
import withLogic from './withLogic'

const AddTag = ({value, onSubmit, onChange, ...restProps}) => (
  <form {...restProps} onSubmit={onSubmit}>
    <input type="submit" tabIndex="-1" style={{display: 'none'}}/>{/* hack to submit on enter */}

    <TextBox
      value={value}
      placeholder="add new tag..."
      onChange={onChange}/>
  </form>
)

AddTag.propTypes = {
  value: string.isRequired,
  onChange: func.isRequired,
  onSubmit: func.isRequired
}

export {AddTag}

export default withLogic(AddTag)
