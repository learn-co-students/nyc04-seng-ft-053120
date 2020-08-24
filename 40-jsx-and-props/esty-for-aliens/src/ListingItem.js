import React from 'react'

// setState
// lifecycle methods
class ListingItem extends React.Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     counter: 0
  //   }
  // }

  // class field syntax!
  state = {
    counter: 0
  }

  render() {
    console.log(this.props)
    const { imageUrl, title } = this.props.listing

    return (
      <div>
        <img src={imageUrl} alt={title} width={200} height={200} />
        <h2>{title}</h2>
      </div>
    )
  }
}

// const ListingItem = (props) => {
//   console.log(props)

//   return (
//     <div>
//       <img src={props.listing.imageUrl} alt={props.listing.title} width={200} height={200} />
//       <h2>{props.listing.title}</h2>
//     </div>
//   )
// }

export default ListingItem