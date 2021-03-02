import getFormById from '@/wpapi/wordpress/gravityForms/getFormById'

/**
 * Format and retrieve expanded block data.
 *
 * @author WebDevStudios
 * @param {Array} blocks Basic block data.
 * @return {Array}       Formatted block data.
 */
export default async function formatBlockData(blocks) {
  if (!blocks || !blocks.length) {
    return []
  }

  return await Promise.all(
    blocks.map(async (block) => {
      const {name, attributes, innerBlocks} = block

      switch (name) {
        case 'gravityforms/form':
          // Retrieve form data.
          attributes.formData = await getFormById(attributes.formId)
          break
      }

      const innerBlocksFormatted = await formatBlockData(innerBlocks)

      return {name, attributes, innerBlocks: innerBlocksFormatted}
    })
  )
}
