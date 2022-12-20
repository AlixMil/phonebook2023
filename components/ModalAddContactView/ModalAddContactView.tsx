import React from 'react'
import { Modal, Space, Upload, Input, Divider } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import TextArea from 'antd/es/input/TextArea'

function ModalAddContactView({ open = false, onOk, onCancel }: { open: boolean, onOk: () => void, onCancel: () => void }): JSX.Element {
	return (
		<Modal
			title="Add contact"
			centered
			open={open}
			onOk={() => onOk()}
			onCancel={() => onCancel()}
		>
			<Space direction='vertical'>
				<Space>
					<Upload
						name="avatar"
						listType="picture-card"
						className="avatar-uploader"
						showUploadList={false}
						action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
					>
						<img alt="avatar" style={{ width: '100%' }} />
					</Upload>
					<label>Contact information</label>
					<Space direction='vertical'>
						<Input placeholder="first name" prefix={<UserOutlined />} />
						<Input placeholder='last name' prefix={<UserOutlined />} />
						<Input placeholder='phone number' />
					</Space>

				</Space>
				<Divider />
				<Space direction='vertical'>
					<Input placeholder='select age of contact' />
					<Input placeholder='choose tags' />
				</Space>
				<Space>
					<label>Note: </label>
					<TextArea showCount maxLength={1000} />
				</Space>
			</Space>


		</Modal>
	)
}

export default ModalAddContactView