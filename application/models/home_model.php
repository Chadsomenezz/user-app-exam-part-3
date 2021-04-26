<?php

class home_model extends CI_Model{
	public function view_all($data){

		$where = "gender='{$data['gender']}' AND country='{$data['country']}'";
		$this->db->where($where);

		$result = $this->db->get('users');
		return $result->result();
	}
}
